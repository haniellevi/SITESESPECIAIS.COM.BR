import os, re, shutil

html_path = r'c:\Users\hanie\Searches\OneDrive\Documentos\ANTIGRAVITY\sitesespeciais.com.br\SITESESPECIAIS.COM.BR\Site-Sites_Especiais\index_sites_especiais_v1.html'
src_app = r'c:\Users\hanie\Searches\OneDrive\Documentos\ANTIGRAVITY\sitesespeciais.com.br\SITESESPECIAIS.COM.BR\src\app\(frontend)'
public_dir = r'c:\Users\hanie\Searches\OneDrive\Documentos\ANTIGRAVITY\sitesespeciais.com.br\SITESESPECIAIS.COM.BR\public'

with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Handle images
def replace_img(match):
    full_path = match.group(1)
    if full_path.startswith('file:///'):
        file_path = full_path.replace('file:///', '').replace('%20', ' ')
        file_path = file_path.replace('/', '\\')
        if os.path.exists(file_path):
            os.makedirs(os.path.join(public_dir, 'images'), exist_ok=True)
            filename = os.path.basename(file_path)
            shutil.copy(file_path, os.path.join(public_dir, 'images', filename))
            return f'/images/{filename}'
    return full_path

html_content = re.sub(r'src=[\'\"](file:///[^\'\"]+)[\'\"]', lambda m: f'src=\"{replace_img(m)}\"', html_content)
html_content = re.sub(r'url\([\'\"]?(file:///[^\'\")]+)[\'\"]?\)', lambda m: f'url({replace_img(m)})', html_content)

style_match = re.search(r'<style>(.*?)</style>', html_content, re.DOTALL)
if style_match:
    with open(os.path.join(src_app, 'home.css'), 'w', encoding='utf-8') as f:
        f.write(style_match.group(1))

js_match = re.search(r'<footer.*?</footer>(.*?)</body>', html_content, re.DOTALL)
if js_match:
    js_content = js_match.group(1)
    script_match = re.search(r'<script>(.*?)</script>', js_content, re.DOTALL)
    if script_match:
        with open(os.path.join(public_dir, 'home-script.js'), 'w', encoding='utf-8') as f:
            f.write(script_match.group(1))

# Extract body contents inside <body ...> ... </body> but exclude the last <script> if possible, or we can just cut off at </footer>.
body_match = re.search(r'<body[^>]*>(.*?)</footer>', html_content, re.IGNORECASE | re.DOTALL)
if body_match:
    body_html = body_match.group(1) + '</footer>'
    
    page_tsx = '''import type { Metadata } from 'next'
import Script from 'next/script'
import './home.css'

export default function HomePage() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `''' + body_html.replace('`', '\\`').replace('$', '\\$') + '''`
        }}
      />
      <Script src=\"https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js\" strategy=\"lazyOnload\" />
      <Script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js\" strategy=\"lazyOnload\" />
      <Script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js\" strategy=\"lazyOnload\" />
      <Script src=\"https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js\" strategy=\"lazyOnload\" />
      <Script src=\"https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js\" strategy=\"lazyOnload\" />
      <Script src=\"/home-script.js\" strategy=\"lazyOnload\" />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Sites Especiais — Sites Premium que Transformam Negócios',
  description: 'Sites premium personalizados para empresas que querem ser encontradas, respeitadas e escolhidas. Agência especializada em presença digital de alto impacto.',
}
'''
    with open(os.path.join(src_app, 'page.tsx'), 'w', encoding='utf-8') as f:
         f.write(page_tsx)
    print('page.tsx overwritten successfully')
else:
    print('body_match NOT found')

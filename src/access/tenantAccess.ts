import type { Access } from 'payload'

export const tenantAccess: Access = ({ req: { user } }) => {
  if (!user) return false
  
  // Super Admins (Master) can see everything
  if (user.roles?.includes('master')) return true
  
  // Tenant Admins can only see documents belonging to their assigned tenants
  if (user.tenants && user.tenants.length > 0) {
    const tenantIds = user.tenants.map((t: any) => (typeof t === 'object' ? t.id : t))
    return {
      tenant: {
        in: tenantIds,
      },
    }
  }
  
  return false
}

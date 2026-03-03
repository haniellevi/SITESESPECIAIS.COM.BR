import type { Field } from 'payload'

export const tenantField: Field = {
  name: 'tenant',
  type: 'relationship',
  relationTo: 'tenants',
  required: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'The tenant this content belongs to',
  },
  access: {
    update: ({ req: { user } }) => {
      // Only master can change the tenant of an existing document
      return user?.roles?.includes('master') || false
    },
  },
  hooks: {
    beforeValidate: [
      ({ value, req: { user } }) => {
        if (value) return value
        if (user && !user.roles?.includes('master') && user.tenants?.[0]) {
          const tenantId = typeof user.tenants[0] === 'object' ? user.tenants[0].id : user.tenants[0]
          return tenantId
        }
        return value
      },
    ],
  },
}

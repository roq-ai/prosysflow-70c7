interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Client Manager', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'ProSysFlow',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0c0d1046-027f-4ce0-af39-c8a38e72264d',
};

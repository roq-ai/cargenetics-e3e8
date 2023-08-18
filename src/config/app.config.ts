interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Vehicle Owner'],
  tenantName: 'Organization',
  applicationName: 'CarGenetics',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

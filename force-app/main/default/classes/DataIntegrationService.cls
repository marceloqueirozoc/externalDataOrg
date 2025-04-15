@RestResource(urlMapping='/createAccountAndCase')
global without sharing class DataIntegrationService {

    @HttpPost
    global static DataIntegrationTO.DataIntegrationResponse createAccountAndCase(DataIntegrationTO.DataIntegrationRequest request) {
        System.debug('Requisição -> ' + request);
        DataIntegrationTO.DataIntegrationResponse response = new DataIntegrationTO.DataIntegrationResponse();
       
        try {
            // Create Account
            Account acc = new Account(
                Name = request.accountName,
                Phone = request.accountPhone
            );
            insert acc;

            // Create Case related to the Account
            Case cs = new Case(
                Subject = request.caseSubject,
                Description = request.caseDescription,
                Origin = request.caseOrigin,
                AccountId = acc.Id
            );
            insert cs;

            response.success = true;
            response.message = 'Account and Case created successfully';
            response.accountId = acc.Id;
            response.caseId = cs.Id;

        } catch (Exception e) {
            response.success = false;
            response.message = 'Error: ' + e.getMessage();
        }

        return response;

    }
}
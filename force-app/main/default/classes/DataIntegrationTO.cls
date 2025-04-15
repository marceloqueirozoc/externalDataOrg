global without sharing class DataIntegrationTO {

    global class DataIntegrationRequest {
        public String accountName;
        public String accountPhone;
        public String caseSubject;
        public String caseDescription;
        public String caseOrigin;
    }

    global class DataIntegrationResponse {
        public Boolean success;
        public String message;
        public Id accountId;
        public Id caseId;
    }

}
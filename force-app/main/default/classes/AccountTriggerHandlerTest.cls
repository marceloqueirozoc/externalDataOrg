@isTest
public class AccountTriggerHandlerTest {
    @isTest
    static void testAccountTriggerCreatesContact() {
        Test.startTest();
        Account acc = new Account(Name = 'Empresa Teste', Phone = '1234-5678');
        insert acc;
        Test.stopTest();
    }
    
    @isTest
    static void testAccountTriggerError() {
        Test.startTest();
        Account acc = new Account(Name = '', Phone = '1234-5678');
        insert acc;
        Test.stopTest();
    }
    
}
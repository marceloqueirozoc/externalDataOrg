@isTest
public class AccountManagerTest {
    @isTest
    static void testCreateAccountWithContact() {
        String testAccountName = 'Acc Test';
        String testContactName = 'Contact Test';

        Test.startTest();
            AccountManager.createAccountWithContact(testAccountName, testContactName, '', '');
        Test.stopTest();
        
        List<Account> acc = [SELECT Id, Name FROM Account WHERE Name = :testAccountName LIMIT 1];
    	System.assertEquals(1, acc.size(), 'A conta não foi criada');
    }

    @isTest
    static void testCreateExistingAccount() {
        Account account = new Account(Name = 'Acc Test');
        insert account;

        String testAccountName = 'Acc Test';
        String testContactName = 'Cnt Test';

        Test.startTest();
            AccountManager.createAccountWithContact(testAccountName, testContactName, '', '');
        Test.stopTest();
        
        List<Account> acc = [SELECT Id, Name FROM Account WHERE Name = :testAccountName LIMIT 1];
    	System.assertEquals(1, acc.size(), 'A conta não foi criada');
    }
    
}
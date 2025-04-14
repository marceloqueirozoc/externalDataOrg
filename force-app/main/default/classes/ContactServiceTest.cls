@isTest
public class ContactServiceTest {

    @isTest
    static void testCreateContact(){
        User adminUser = [SELECT Id FROM User WHERE Email = 'marceloqueirozoc@gmail.com' LIMIT 1];
        System.runAs(adminUser){
            try {
                Test.startTest();
                    ContactService.createContacts('A', 'Teste', 'aaa@teste.com', '11155-5555');
                Test.stopTest();
            } catch (Exception e) {
                System.debug('Exception: ' + e.getMessage());
            }
        }
    }

    @isTest
    static void testCreateEmptyContact(){
        User adminUser = [SELECT Id FROM User WHERE Email = 'marceloqueirozoc@gmail.com' LIMIT 1];
        System.runAs(adminUser){
            try {
                Test.startTest();
                    ContactService.createContacts('', '', '', '');
                Test.stopTest();
            } catch (Exception e) {
                System.debug('Exception: ' + e.getMessage());
            }
        }
    }

}
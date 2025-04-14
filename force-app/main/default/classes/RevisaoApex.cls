public with sharing class RevisaoApex {

    public static void insertAccount(String name){
        Account acc = new Account();
        acc.name = name;
        acc.observacoes__c = 'Teste de conta';
        insert acc;
    }

    public static void insertAccounts(){
        List<Account> accounts = new List<Account>();
        
        Account acc1 = new Account();
        acc1.name = 'Acc 1';
        acc1.observacoes__c = 'Teste de conta 1';

        Account acc2 = new Account();
        acc2.name = 'Acc 2';
        acc2.observacoes__c = 'Teste de conta 2';

        accounts.add(acc1);
        accounts.add(acc2);

        insert accounts;
    }

    public static List<Account> insertNAccs(Integer nAccs){

        List<Account> accList = new List<Account>();
        for (Integer i = 1; i <= nAccs; i++){
            Account acc = new Account();
            acc.Name = 'Operacao '+ i;
            acc.observacoes__c = 'Estamos no ' + i + ' interacao';
            accList.add(acc);
        }
        insert accList;
        System.debug('Lista de Contas ->' + accList);
        return accList;
    }

    public static void updateAccount(String accName){

        List<Account> accLst = [SELECT Id, Name, observacoes__c FROM Account WHERE Name = :accName LIMIT 10];

        if(accLst.size() > 0){
            Integer i = 1;
            for(Account acc : accLst) {
                acc.observacoes__c = 'Update de conta ' + i;
                i++;
            }
            update accLst;
        }
    }   
}
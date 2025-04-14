public class ContactBO {
    public static void createContact(String firstName, String lastName, String email, String phone) {
        if (String.isEmpty(firstName) || String.isEmpty(lastName)) {
            throw new IllegalArgumentException('Campos Nome e Sobrenome são obrigatórios.');
        }
        
        Contact newContact = new Contact(
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Phone = phone
        );
        
        try {
            insert newContact;
        } catch (DmlException e) {
            System.debug('Erro ao criar o contato: ' + e.getMessage());   
        }
    }
}
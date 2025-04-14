trigger LeadCompanyTrigger on Lead (before insert) {
	if(Trigger.isBefore){
		If(Trigger.isInsert){
		LeadCompanyHelper.populateCompany(Trigger.new);
		}
	}
}
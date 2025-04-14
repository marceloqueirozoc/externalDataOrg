trigger CaseDescriptionTrigger on Case (before insert, before update) {
    if (Trigger.isBefore && Trigger.isInsert) {
        CaseHelper.setDescriptionOnInsert(Trigger.new);
    }

    if (Trigger.isBefore && Trigger.isUpdate) {
        CaseHelper.setDescriptionOnUpdate(Trigger.new);
    }
}
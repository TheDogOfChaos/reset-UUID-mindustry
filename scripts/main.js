Vars.ui.menufrag.addButton("ResetUUID", Core.atlas.find("trash"), () => {
		Vars.ui.showConfirm("[red]Are you sure you want to reset your UUID?\nThis action CANNOT be undone.")
		Core.settings.put("uuid","") 
		Vars.platform.getUUID()
	}
);
Vars.ui.menufrag.addButton("Set UUID", Core.atlas.find("save"), () => {
		Vars.ui.showTextInput("[red]If you mess thi up and can't join servers, you must reset your UUID.\nThis tool will not check the UUID for validity.\n[white]Your current UUID has been placed in the text field for your convenience.","UUID:",Vars.platform.getUUID(), res => { 
			Core.settings.put("uuid",res);
	});
});

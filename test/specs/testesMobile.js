describe("Testes Dialog Alerts - Ok Cancel Dialog with Message", () => {

    afterEach ("Sair da página", async () => {
        driver.reset() 
         });

    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Alert Dialogs", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoAlerts = await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').getText();
        expect(textoBotaoAlerts).toBe("Alert Dialogs");
    });


    it("Teste texto botão Ok Cancel Dialog With a Message", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const textoBotaoOkCancel = await $("id=two_buttons").getText();
        expect(textoBotaoOkCancel).toBe("OK CANCEL DIALOG WITH A MESSAGE");
    });

    it("Teste botão Ok", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        var visibilidadeBotaoOk = await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoOk).toBe(true);
        const textoBotaoOk = await $('android=new UiSelector().text("OK").className("android.widget.Button")').getText();
        expect(textoBotaoOk).toBe("OK"); 
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        var visibilidadeBotaoOk = await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed();
        expect(visibilidadeBotaoOk).toBe(false);
    });

    it("Teste botão Cancel", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        var visibilidadeBotaoCancel = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCancel).toBe(true);
        const textoBotaoCancel = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').getText();
        expect(textoBotaoCancel).toBe("CANCEL"); 
        await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();
        var visibilidadeBotaoOk = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isDisplayed();
        expect(visibilidadeBotaoOk).toBe(false);
    });



    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });
    
    it("Teste texto botão Alert Dialogs", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoAlerts = await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').getText();
        expect(textoBotaoAlerts).toBe("Alert Dialogs");
    });
    
    it("Teste texto botão List Dialg", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const textoBotaoListDialog = await $("id=select_button").getText();
        expect(textoBotaoListDialog).toBe("LIST DIALOG");
    });
    
    it("Teste texto Header Title", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const textoHeaderTitle = await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').getText();
        expect(textoHeaderTitle).toBe("Header title");
    });
    
    it("Teste botão Command one", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const textoBotaoCommandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').getText();
        expect(textoBotaoCommandOne).toBe("Command one");
        var visibilidadeBotaoCommandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandOne).toBe(true);
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        var visibilidadeBotaoCommandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandOne).toBe(false);
        const textoCommandOne = await $('android=new UiSelector().text("You selected: 0 , Command one").className("android.widget.TextView")').getText();
        expect(textoCommandOne).toBe("You selected: 0 , Command one");
    });
    
    it("Teste botão Command two", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const textoBotaoCommandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').getText();
        expect(textoBotaoCommandTwo).toBe("Command two");
        var visibilidadeBotaoCommandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandTwo).toBe(true);
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        var visibilidadeBotaoCommandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandTwo).toBe(false);
        const textoCommandTwo = await $('android=new UiSelector().text("You selected: 1 , Command two").className("android.widget.TextView")').getText();
        expect(textoCommandTwo).toBe("You selected: 1 , Command two");
    });
    
    it("Teste botão Command three", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const textoBotaoCommandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').getText();
        expect(textoBotaoCommandThree).toBe("Command three");
        var visibilidadeBotaoCommandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandThree).toBe(true);
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        var visibilidadeBotaoCommandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandThree).toBe(false);
        const textoCommandThree = await $('android=new UiSelector().text("You selected: 2 , Command three").className("android.widget.TextView")').getText();
        expect(textoCommandThree).toBe("You selected: 2 , Command three");
    });
    
    it("Teste botão Command four", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const textoBotaoCommandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').getText();
        expect(textoBotaoCommandFour).toBe("Command four");
        var visibilidadeBotaoCommandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandFour).toBe(true);
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        var visibilidadeBotaoCommandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeBotaoCommandFour).toBe(false);
        const textoCommandFour = await $('android=new UiSelector().text("You selected: 3 , Command four").className("android.widget.TextView")').getText();
        expect(textoCommandFour).toBe("You selected: 3 , Command four");
    });

        

    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Fragment/Hide and Show;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Fragment", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoFragment = await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').getText();
        expect(textoBotaoFragment).toBe("Fragment");
    });

    it("Teste texto Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        const textoBotaoHideAndShow = await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').getText();
        expect(textoBotaoHideAndShow).toBe("Hide and Show");
    });


    it("Teste tela Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const textoHeader = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').getText();
        expect(textoHeader).toBe("Demonstration of hiding and showing fragments.");
        const botaoHideUm = await $("id=frag1hide").getText();
        expect(botaoHideUm).toBe("HIDE");
        const botaoHideDois = await $("id=frag2hide").getText();
        expect(botaoHideDois).toBe("HIDE");
        const fraseFragment = await $('android=new UiSelector().text("The fragment saves and restores this text.").className("android.widget.TextView")').getText();
        expect(fraseFragment).toBe("The fragment saves and restores this text.");
        const fraseTextView = await $('android=new UiSelector().text("The TextView saves and restores this text.").className("android.widget.TextView")').getText();
        expect(fraseTextView).toBe("The TextView saves and restores this text.");
    });

    it("Teste botão Primeiro Hide", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        var visibilidadeTextoFragment = await $('android=new UiSelector().text("The fragment saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoFragment).toBe(true);
        await $("id=frag1hide").click();
        var visibilidadeTextoFragment = await $('android=new UiSelector().text("The fragment saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoFragment).toBe(false);
        var botaoHideUm = await $("id=frag1hide").getText();
        expect(botaoHideUm).toBe("SHOW");
        await $("id=frag1hide").click();
        var visibilidadeTextoFragment = await $('android=new UiSelector().text("The fragment saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoFragment).toBe(true);
        var botaoHideUm = await $("id=frag1hide").getText();
        expect(botaoHideUm).toBe("HIDE");
    });

    it("Teste botão Segundo Hide", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        var visibilidadeTextoTextView = await $('android=new UiSelector().text("The TextView saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoTextView).toBe(true);
        await $("id=frag2hide").click();
        var visibilidadeTextoTextView = await $('android=new UiSelector().text("The TextView saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoTextView).toBe(false);
        var botaoHideDois = await $("id=frag2hide").getText();
        expect(botaoHideDois).toBe("SHOW");
        await $("id=frag2hide").click();
        var visibilidadeTextoTextView = await $('android=new UiSelector().text("The TextView saves and restores this text.").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoTextView).toBe(true);
        var botaoHideDois = await $("id=frag2hide").getText();
        expect(botaoHideDois).toBe("HIDE");
    });


    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Action Bar", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoActionBar = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').getText();
        expect(textoBotaoActionBar).toBe("Action Bar");
    });

    it("Teste texto botão Display Options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        const textoBotaoDisplayOptions = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').getText();
        expect(textoBotaoDisplayOptions).toBe("Display Options");
    });

    it("Teste texto botão DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const textoBotaoDisplayHomeAsUp = await $("id=toggle_home_as_up").getText();
        expect(textoBotaoDisplayHomeAsUp).toBe("DISPLAY_HOME_AS_UP");
    });

    it("Teste interação botão DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_home_as_up").click();
        var visibilidadeNavigateUp = await $('//android.widget.ImageButton[@content-desc="Navigate up"]').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeNavigateUp).toBe(true);
        await $("id=toggle_home_as_up").click();
        var visibilidadeNaviagateUp = await $('//android.widget.ImageButton[@content-desc="Navigate up"]').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeNaviagateUp).toBe(false);

    });

    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Action Bar", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoActionBar = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').getText();
        expect(textoBotaoActionBar).toBe("Action Bar");
    });

    it("Teste texto botão Display Options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        const textoBotaoDisplayOptions = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').getText();
        expect(textoBotaoDisplayOptions).toBe("Display Options");
    });

    it("Teste texto botão DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const textoBotaoDisplayShowTitle = await $("id=toggle_show_title").getText();
        expect(textoBotaoDisplayShowTitle).toBe("DISPLAY_SHOW_TITLE");
    });

    it("Teste interação botão DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
        var visibilidadeTextoApp = await $("android.widget.TextView").isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoApp).toBe(false);
        await $("id=toggle_show_title").click();
        var visibilidadeTextoApp = await $("android.widget.TextView").isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTextoApp).toBe(true);
        const textoHeaderApp = await $("android.widget.TextView").getText();
        expect(textoHeaderApp).toBe("App/Action Bar/Display Options");
    });

    // Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM;

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Action Bar", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoActionBar = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').getText();
        expect(textoBotaoActionBar).toBe("Action Bar");
    });

    it("Teste texto botão Display Options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        const textoBotaoDisplayOptions = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').getText();
        expect(textoBotaoDisplayOptions).toBe("Display Options");
    });

    it("Teste texto botão DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const textoBotaoDisplayShowCustom = await $("id=toggle_show_custom").getText();
        expect(textoBotaoDisplayShowCustom).toBe("DISPLAY_SHOW_CUSTOM");
    });

    it("Teste interação botão DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        var visibilidadeCustomView = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeCustomView).toBe(true);
        const textoBotaoCustomView = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getText();
        expect(textoBotaoCustomView).toBe("CUSTOM VIEW!");
        await $("id=toggle_show_custom").click();
        var visibilidadeCustomView = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeCustomView).toBe(false);
    });

    //  Crie testes que verifiquem o fluxo e utilização do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_NAVIGATION.

    it("Teste texto botão App", async () => {
        const textoBotaoApp = await $('android=new UiSelector().text("App").className("android.widget.TextView")').getText();
        expect(textoBotaoApp).toBe("App");
    });

    it("Teste texto botão Action Bar", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        const textoBotaoActionBar = await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').getText();
        expect(textoBotaoActionBar).toBe("Action Bar");
    });

    it("Teste texto botão Display Options", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        const textoBotaoDisplayOptions = await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').getText();
        expect(textoBotaoDisplayOptions).toBe("Display Options");
    });

    it("Teste texto botão DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const textoBotaoDisplayShowCustom = await $("id=toggle_navigation").getText();
        expect(textoBotaoDisplayShowCustom).toBe("NAVIGATION");
    });

    it("Teste interação botão DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
        var visibilidadeTab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab1).toBe(true);
        const textoTab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').getText();
        expect(textoTab1).toBe("TAB 1");
        var visibilidadeTab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab2).toBe(true);
        const textoTab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').getText();
        expect(textoTab2).toBe("TAB 2");
        var visibilidadeTab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab3).toBe(true);
        const textoTab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').getText();
        expect(textoTab3).toBe("TAB 3");
        await $("id=toggle_navigation").click();
        var visibilidadeTab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab1).toBe(false);
        var visibilidadeTab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab2).toBe(false);
        var visibilidadeTab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed(); //is displeayed retorna true or false
        expect(visibilidadeTab3).toBe(false);
    });

});
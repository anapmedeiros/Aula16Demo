const FormScreen = require("..pages/form.screen")

let inicial = 'Form components'

describe('Acessar forms', () =>
    it('Deve acessar menu forms',  async() => {
        await FormScreen.gotToForm()
       });

       it('Deve cadastrar um formulário', async () => {
       await FormScreen.gotToForm()

       const Text = '~text-input'
       const Button_click = '~Dropdown'
       const selector = 'new Uiselector()'.text("Appium is awesome").className("android.widget.CheckedTextView")'
       const button = await $('android=${selector}')

       await $(Text).setValue('Acesso 1')
       await $(Button_click).click()
       await button.click()
       await $('android=new UiScrollable(new Selector().scrollable(true)).scrollToEnd(1,5)');
       await $('~button-Active').click()

       expect (await $('//android.widget.TextView').getText(initial))

       });

    })
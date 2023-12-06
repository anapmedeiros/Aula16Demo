class HomeForm {

    async gotToForm() {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
        await $('~text-input').setValue('TESTE')

    }
}

module.exports = new HomeForm()
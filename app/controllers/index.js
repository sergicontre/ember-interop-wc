import Controller from '@ember/controller';

export default Controller.extend({
    title: 'My LitElement Bank',
    info: 'Hola',
    sendInfo(event) {
        this.set('info', JSON.stringify(event.detail)) 
        console.log('====>', event.detail)
    }
});

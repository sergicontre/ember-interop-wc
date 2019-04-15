import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    title: 'My LitElement Bank',
    toast: service(),
    
    sendInfo(event) {
        const { type, detail } = event;
        const toast = this.get('toast');
        const options = {
            progressBar: false,
            closeButton: false
          };
        toast.info(`Detail: ${JSON.stringify(detail)}`, `Event: ${type}`, options);
    }
});

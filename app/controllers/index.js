import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    title: 'My LitElement Bank',
    result: '',
    toast: service(),

    actions: {
      sendInfo(event) {
          const { type, detail } = event;
          const toast = this.get('toast');
          const options = {
              progressBar: false,
              closeButton: false
            };
          this.set('result', JSON.stringify(detail, null, 2));
          toast.info(`Detail: ${JSON.stringify(detail)}`, `Event: ${type}`, options);
      }
    }

});

import { createServer, Model } from 'miragejs'

type Motorcycle = {
  displacement: string,
  horse_Power: string,
  torque: string,
  dry_weight: string,
  seat_Height: string,
  safety: string,
  image?: HTMLImageElement,
}

export default function mirageServer() {

  const server = createServer({
    models: {
      motorcycle: Model.extend<Motorcycle>({

      }),
    },

    factories: {

    },

    seeds(server) {

    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/motorcycle')

      this.namespace = '';
      this.passthrough();
    }
  });

  return server

}

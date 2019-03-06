import { WinnersService }  from './../services/winners.service';

export class WinnersComponent {
    constructor(option) {
        this._winnersService = new WinnersService();
        this._option = option || "?part=1&limit=15";
        this._winners;
    }
    async beforeRender() {
        this._winners = await this._winnersService.getWinners(this._option);
    }
    render() {
        return `
            <div>
                <img src="${this._winners.winners[0].member_id.images[0].image_basic.url}" alt="img"/>
            </div>
        `;
    }
    afterRender() {
        
    }
}
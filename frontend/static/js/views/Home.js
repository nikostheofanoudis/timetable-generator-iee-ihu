import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων - Διεθνές Πανεπιστήμιο της Ελλάδος");
    }

    async getHtml() {
        return `
        <div class="container">
            <h1>Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων</h1>
            <p>Διεθνές Πανεπιστήμιο της Ελλάδος</p>
            <p>Επέλεξε τα μαθήματα που θα παρακολουθήσεις αυτό το εξάμηνο και δημιούργησε το πρόγραμμα σου.</p>
            <div class="buttons">
                <a href="/winter" class="button">Πρόγραμμα Χειμερινού Εξαμήνου</a>
                <a href="/spring" class="button">Πρόγραμμα Εαρινού Εξαμήνου</a>
            </div>
        </div>
        `;
    }
}
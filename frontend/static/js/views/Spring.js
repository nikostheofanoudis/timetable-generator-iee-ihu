import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Πρόγραμμα Εαρινού Εξαμήνου || Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων - Διεθνές Πανεπιστήμιο της Ελλάδος");
    }

    async getHtml() {
        return `
        <div class="container">
            <h1 id="semester">Πρόγραμμα Εαρινού Εξαμήνου 2020 - 2021</h1>
        </div>
        <div id="tab">
            <table class="table table-bordered">
                <thead class="thead-primary">
                    <tr>
                        <th scope="col">Ώρες</th>
                        <th scope="col">Δευτέρα</th>
                        <th scope="col">Τρίτη</th>
                        <th scope="col">Τετάρτη</th>
                        <th scope="col">Πέμπτη</th>
                        <th scope="col">Παρασκευή</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09:00 - 10:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                    <tr>
                        <td>10:00 - 11:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                    <tr>
                        <td>11:00 - 12:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>12:00 - 13:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>13:00 - 14:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>14:00 - 15:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>15:00 - 16:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>16:00 - 17:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>17:00 - 18:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>18:00 - 19:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                        <td>19:00 - 20:00</td>
                        <td id="Δευτέρα"></td>
                        <td id="Τρίτη"></td>
                        <td id="Τετάρτη"></td>
                        <td id="Πέμπτη"></td>
                        <td id="Παρασκευή"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="container">
            <div class="buttons">
                <input class="button" style="border: none" type="button" value="Create PDF" id="btPrint" onclick="createPDF()" />
            </div>
        </div>

        <main>
            <section class="cards">
                <div class="card">
                    <p class="card-title">Τα μαθήματα που διάλεξα:</p>
                    <!-- 2ο Εξάμηνο -->
                    <p class="function1201a_steps" style="display:none" data-step='1201a'>Μαθηματικά ΙΙ A1</p>
                    <p class="function1201b_steps" style="display:none" data-step='1201b'>Μαθηματικά ΙΙ A2</p>
                    <p class="function1202a_steps" style="display:none" data-step='1202a'>Μετρήσεις και Κυκλώματα Εναλλασσόμενου Ρεύματος A1</p>
                    <p class="function1202b_steps" style="display:none" data-step='1202b'>Μετρήσεις και Κυκλώματα Εναλλασσόμενου Ρεύματος A2</p>
                    <p class="function1203a_steps" style="display:none" data-step='1203a'>Τεχνική Συγγραφή, Παρουσίαση και Ορολογία Ξένης Γλώσσας A1</p>
                    <p class="function1203b_steps" style="display:none" data-step='1203b'>Τεχνική Συγγραφή, Παρουσίαση και Ορολογία Ξένης Γλώσσας A2</p>
                    <p class="function1204a_steps" style="display:none" data-step='1204a'>Σχεδίαση Ψηφιακών Συστημάτων A1</p>
                    <p class="function1204b_steps" style="display:none" data-step='1204b'>Σχεδίαση Ψηφιακών Συστημάτων A2</p>
                    <p class="function1205a_steps" style="display:none" data-step='1205a'>Αντικειμενοστρεφής Προγραμματισμός A1</p>
                    <p class="function1205b_steps" style="display:none" data-step='1205b'>Αντικειμενοστρεφής Προγραμματισμός A2</p>
                    <!-- 4ο Εξάμηνο -->
                    <p class="function1401_steps" style="display:none" data-step='1401'>Συστήματα Διαχείρισης Βάσεων Δεδομένων</p>
                    <p class="function1402_steps" style="display:none" data-step='1402'>Τηλεπικοινωνιακά Συστήματα</p>
                    <p class="function1403_steps" style="display:none" data-step='1403'>Επεξεργασία Σήματος</p>
                    <p class="function1404_steps" style="display:none" data-step='1404'>Εισαγωγή στα Λειτουργικά Συστήματα</p>
                    <p class="function1405_steps" style="display:none" data-step='1405'>Οργάνωση και Αρχιτεκτονική Υπολογιστικών Συστημάτων</p>
                    <!-- 6ο Εξάμηνο -->
                    <p class="function1601_steps" style="display:none" data-step='1601'>Τεχνητή Νοημοσύνη</p>
                    <p class="function1602_steps" style="display:none" data-step='1602'>Ενσωματωμένα Συστήματα</p>
                    <p class="function1611_steps" style="display:none" data-step='1611'>Σύνθεση Ηλεκτρονικών Κυκλωμάτων</p>
                    <p class="function1612_steps" style="display:none" data-step='1612'>Κβαντική Υπολογιστική</p>
                    <p class="function1613_steps" style="display:none" data-step='1613'>Μεθοδολογίες Σχεδιασμού Μικροηλεκτρονικών Κυκλωμάτων **</p>
                    <p class="function1641_steps" style="display:none" data-step='1641'>Αριθμητικές Μέθοδοι</p>
                    <p class="function1642_steps" style="display:none" data-step='1642'>Προηγμένα Θέματα Αλληλεπίδρασης (Προγραμματισμός Κινητών Συσκευών)</p>
                    <p class="function1643_steps" style="display:none" data-step='1643'>Διοίκηση Έργων</p>
                    <p class="function1671_steps" style="display:none" data-step='1671'>Μικροκυματική Τεχνολογία και Τηλεπισκόπηση</p>
                    <p class="function1672_steps" style="display:none" data-step='1672'>Οπτοηλεκτρονική και Οπτικές Επικοινωνίες</p>
                    <p class="function1673_steps" style="display:none" data-step='1673'>Συστήματα Μέσων Μαζικής Επικοινωνίας</p>
                    <!-- 8ο Εξάμηνο -->
                    <p class="function1701_steps" style="display:none" data-step='1701'>Δίκτυα Υπολογιστών</p>
                    <p class="function1702_steps" style="display:none" data-step='1702'>Ηλεκτρονικά Ισχύος</p>
                    <p class="function1711_steps" style="display:none" data-step='1711'>Συστήματα Αυτομάτου Ελέγχου</p>
                    <p class="function1712_steps" style="display:none" data-step='1712'>Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                    <p class="function1713_steps" style="display:none" data-step='1713'>Προγραμματιζόμενοι Λογικοί Ελεγκτές</p>
                    <p class="function1714_steps" style="display:none" data-step='1714'>Σχεδίαση Επαναπροσδιοριζόμενων Ψηφιακών Συστημάτων (FPGA)</p>
                    <p class="function1741_steps" style="display:none" data-step='1741'>Εισαγωγή στην Αναλυτική των Δεδομένων</p>
                    <p class="function1742_steps" style="display:none" data-step='1742'>Μηχανική Λογισμικού</p>
                    <p class="function1743_steps" style="display:none" data-step='1743'>Τεχνολογία Βάσεων Δεδομένων</p>
                    <p class="function1744_steps" style="display:none" data-step='1744'>Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                    <p class="function1771_steps" style="display:none" data-step='1771'>Τεχνολογίες Ήχου και Εικόνας</p>
                    <!-- 8ο Εξάμηνο -->
                    <p class="function1811_steps" style="display:none" data-step='1811'>Εφαρμογές Συστημάτων Αυτομάτου Ελέγχου</p>
                    <p class="function1812_steps" style="display:none" data-step='1812'>Μετατροπείς Ισχύος</p>
                    <p class="function1837_steps" style="display:none" data-step='1837'>Μικροηλεκτρονική *</p>
                    <p class="function1838_steps" style="display:none" data-step='1838'>Εφαρμογές Συστημάτων Ισχύος και ΑΠΕ *</p>
                    <p class="function1839_steps" style="display:none" data-step='1839'>Ηλεκτροκίνηση και Ευφυή Δίκτυα *</p>
                    <p class="function1841_steps" style="display:none" data-step='1841'>Οργάνωση Δεδομένων και Εξόρυξη Πληροφορίας</p>
                    <p class="function1842_steps" style="display:none" data-step='1842'>Διαδικτυακές Υπηρεσίες Προστιθέμενης Αξίας</p>
                    <p class="function1948_steps" style="display:none" data-step='1948'>Ανάπτυξη Ολοκληρωμένων Πληροφοριακών Συστημάτων</p>
                    <p class="function1871_steps" style="display:none" data-step='1871'>Ασύρματα Δίκτυα</p>
                    <p class="function1872_steps" style="display:none" data-step='1872'>Ειδικά Θέματα Δικτύων (CCNA) 1</p>
                    <p class="function1873_steps" style="display:none" data-step='1873'>Προηγμένα Θέματα Δικτύων</p>
                    <p class="function1874_steps" style="display:none" data-step='1874'>Συστήματα Κινητών Επικοινωνιών</p>
                    <p class="function1898_steps" style="display:none" data-step='1898'>Ελεύθερη Επιλογή Β</p>
                    <p class="function1899_steps" style="display:none" data-step='1899'>Ραδιοτηλεοπτική Παραγωγή *</p>
                </div>
            </section>
            <section class="cards">
                <div class="card">
                    <p class="card-title">2o Εξάμηνο - Ομάδα 1</p>
                    <p><input type="checkbox" data-step='1201a' onclick="myFunction(this)">Μαθηματικά II A1</p>
                    <p><input type="checkbox" data-step='1202a' onclick="myFunction(this)">Μετρήσεις και Κυκλώματα Εναλλασσόμενου Ρεύματος A1</p>
                    <p><input type="checkbox" data-step='1203a' onclick="myFunction(this)">Τεχνική Συγγραφή, Παρουσίαση και Ορολογία Ξένης Γλώσσας A1</p>
                    <p><input type="checkbox" data-step='1204a' onclick="myFunction(this)">Σχεδίαση Ψηφιακών Συστημάτων A1</p>
                    <p><input type="checkbox" data-step='1205a' onclick="myFunction(this)">Αντικειμενοστρεφής Προγραμματισμός A1</p>
                </div>
                <div class="card">
                    <p class="card-title">2o Εξάμηνο - Ομάδα 2</p>
                    <p><input type="checkbox" data-step='1201b' onclick="myFunction(this)">Μαθηματικά II A2</p>
                    <p><input type="checkbox" data-step='1202b' onclick="myFunction(this)">Μετρήσεις και Κυκλώματα Εναλλασσόμενου Ρεύματος A2</p>
                    <p><input type="checkbox" data-step='1203b' onclick="myFunction(this)">Τεχνική Συγγραφή, Παρουσίαση και Ορολογία Ξένης Γλώσσας A2</p>
                    <p><input type="checkbox" data-step='1204b' onclick="myFunction(this)">Σχεδίαση Ψηφιακών Συστημάτων A2</p>
                    <p><input type="checkbox" data-step='1205b' onclick="myFunction(this)">Αντικειμενοστρεφής Προγραμματισμός A2</p>
                </div>
                <div class="card">
                    <p class="card-title">4o Εξάμηνο</p>
                    <p><input type="checkbox" data-step='1401' onclick="myFunction(this)">Συστήματα Διαχείρισης Βάσεων Δεδομένων</p>
                    <p><input type="checkbox" data-step='1402' onclick="myFunction(this)">Τηλεπικοινωνιακά Συστήματα</p>
                    <p><input type="checkbox" data-step='1403' onclick="myFunction(this)">Εισαγωγή στα Λειτουργικά Συστήματα</p>
                    <p><input type="checkbox" data-step='1404' onclick="myFunction(this)">Ηλεκτρονικά Κυκλώματα</p>
                    <p><input type="checkbox" data-step='1405' onclick="myFunction(this)">Οργάνωση και Αρχιτεκτονική Υπολογιστικών Συστημάτων</p>
                </div>
                <div class="card">
                    <p class="card-title">6o Εξάμηνο</p>
                    <p><input type="checkbox" data-step='1601' onclick="myFunction(this)">Τεχνητή Νοημοσύνη</p>
                    <p><input type="checkbox" data-step='1602' onclick="myFunction(this)">Ενσωματωμένα Συστήματα</p>
                </div>
                <div class="card">
                    <p class="card-title">6o Εξάμηνο - Ομάδα Ηλεκτρονικών και Ενσωματωμένων Συστημάτων (ΗΛΕΣ)</p>
                    <p><input type="checkbox" data-step='1611' onclick="myFunction(this)">Σύνθεση Ηλεκτρονικών Κυκλωμάτων</p>
                    <p><input type="checkbox" data-step='1612' onclick="myFunction(this)">Κβαντική Υπολογιστική</p>
                    <p><input type="checkbox" data-step='1613' onclick="myFunction(this)">Μεθοδολογίες Σχεδιασμού Μικροηλεκτρονικών Κυκλωμάτων **</p>
                </div>
                <div class="card">
                    <p class="card-title">6o Εξάμηνο - Ομάδα Προγραμματισμού, Δεδομένων και Τεχνητής Νοημοσύνης (ΠΔΤΝ)</p>
                    <p><input type="checkbox" data-step='1641' onclick="myFunction(this)">Αριθμητικές Μέθοδοι</p>
                    <p><input type="checkbox" data-step='1642' onclick="myFunction(this)">Προηγμένα Θέματα Αλληλεπίδρασης (Προγραμματισμός Κινητών Συσκευών)</p>
                    <p><input type="checkbox" data-step='1643' onclick="myFunction(this)">Διοίκηση Έργων</p>
                </div>
                <div class="card">
                    <p class="card-title">6o Εξάμηνο - Κοινά Μαθήματα Επιλογής Ανεξάρτητα από Ομάδα (ΚΟΙΝ)</p>
                    <p><input type="checkbox" data-step='1671' onclick="myFunction(this)">Μικροκυματική Τεχνολογία και Τηλεπισκόπηση</p>
                    <p><input type="checkbox" data-step='1672' onclick="myFunction(this)">Οπτοηλεκτρονική και Οπτικές Επικοινωνίες</p>
                    <p><input type="checkbox" data-step='1673' onclick="myFunction(this)">Συστήματα Μέσων Μαζικής Επικοινωνίας</p>
                </div>
                <div class="card">
                    <p class="card-title">8o Εξάμηνο - Ομάδα Ηλεκτρονικών και Ενσωματωμένων Συστημάτων (ΗΛΕΣ)</p>
                    <p><input type="checkbox" data-step='1811' onclick="myFunction(this)">Εφαρμογές Συστημάτων Αυτομάτου Ελέγχου</p>
                    <p><input type="checkbox" data-step='1812' onclick="myFunction(this)">Μετατροπείς Ισχύος</p>
                    <p><input type="checkbox" data-step='1837' onclick="myFunction(this)">Μικροηλεκτρονική *</p>
                    <p><input type="checkbox" data-step='1838' onclick="myFunction(this)">Εφαρμογές Συστημάτων Ισχύος και ΑΠΕ *</p>
                    <p><input type="checkbox" data-step='1839' onclick="myFunction(this)">Ηλεκτροκίνηση και Ευφυή Δίκτυα *</p>
                </div>
                <div class="card">
                    <p class="card-title">8o Εξάμηνο - Ομάδα Προγραμματισμού, Δεδομένων και Τεχνητής Νοημοσύνης (ΠΔΤΝ)</p>
                    <p><input type="checkbox" data-step='1841' onclick="myFunction(this)">Οργάνωση Δεδομένων και Εξόρυξη Πληροφορίας</p>
                    <p><input type="checkbox" data-step='1842' onclick="myFunction(this)">Διαδικτυακές Υπηρεσίες Προστιθέμενης Αξίας</p>
                    <p><input type="checkbox" data-step='1948' onclick="myFunction(this)">Ανάπτυξη Ολοκληρωμένων Πληροφοριακών Συστημάτων</p>
                </div>
                <div class="card">
                    <p class="card-title">8o Εξάμηνο - Κοινά Μαθήματα Επιλογής Ανεξάρτητα από Ομάδα (ΚΟΙΝ)</p>
                    <p><input type="checkbox" data-step='1871' onclick="myFunction(this)">Ασύρματα Δίκτυα</p>
                    <p><input type="checkbox" data-step='1872' onclick="myFunction(this)">Ειδικά Θέματα Δικτύων (CCNA) 1</p>
                    <p><input type="checkbox" data-step='1873' onclick="myFunction(this)">Προηγμένα Θέματα Δικτύων</p>
                    <p><input type="checkbox" data-step='1874' onclick="myFunction(this)">Συστήματα Κινητών Επικοινωνιών</p>
                    <p><input type="checkbox" data-step='1898' onclick="myFunction(this)">Ελεύθερη Επιλογή Β</p>
                    <p><input type="checkbox" data-step='1899' onclick="myFunction(this)">Ραδιοτηλεοπτική Παραγωγή *</p>
                </div>
            </section>
        </main>
        `;
    }
}
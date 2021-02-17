import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Πρόγραμμα Χειμερινού Εξαμήνου || Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων - Διεθνές Πανεπιστήμιο της Ελλάδος");
    }

    async getHtml() {
        return `
            <div class="container">
                <h1 id="semester">Πρόγραμμα Χειμερινού Εξαμήνου 2020 - 2021</h1>
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
                        <td id="Δευτέρα">
                            <p class="function1104a_steps" style="display:none" data-step='1104a'>Ηλεκτρονική Φυσική A1</p>
                            <p class="function1103b_steps" style="display:none" data-step='1103b'>Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                            <p class="function1301_steps" style="display:none" data-step='1301'>Θεωρία Πιθανοτήτων και Στατιστική</p>
                            <p class="function1502_steps" style="display:none" data-step='1502'>Μικροελεγκτές</p>
                            <p class="function1702_steps" style="display:none" data-step='1702'>Ηλεκτρονικά Ισχύος</p>
                            <p class="function1911_steps" style="display:none" data-step='1911'>Εφαρμογές Ενσωματωμένων Συστημάτων</p>
                            <p class="function1969_steps" style="display:none" data-step='1969'>Γραφικά Υπολογιστών</p>
                        </td>
                        <td id="Τρίτη">
                            <p class="function1105a_steps" style="display:none" data-step='1105a'>Κυκλώματα Συνεχούς Ρεύματος A1</p>
                            <p class="function1504_steps" style="display:none" data-step='1504'>Ηλεκτρονικές Διατάξεις</p>
                            <p class="function1713_steps" style="display:none" data-step='1713'>Προγραμματιζόμενοι Λογικοί Ελεγκτές</p>
                            <p class="function1949_steps" style="display:none" data-step='1949'>Κατανεμημένα Συστήματα</p>
                            <p class="function1913_steps" style="display:none" data-step='1913'>ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                        </td>
                        <td id="Τετάρτη">
                            <p class="function1103a_steps" style="display:none" data-step='1103a'>Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                            <p class="function1301_steps" style="display:none" data-step='1301'>Θεωρία Πιθανοτήτων και Στατιστική</p>
                            <p class="function1505_steps" style="display:none" data-step='1505'>Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                            <p class="function1945_steps" style="display:none" data-step='1945'>Ευφυή Συστήματα</p>
                            <p class="function1949_steps" style="display:none" data-step='1949'>Κατανεμημένα Συστήματα</p>
                            <p class="function1913_steps" style="display:none" data-step='1913'>ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                        </td>
                        <td id="Πέμπτη">
                            <p class="function1104a_steps" style="display:none" data-step='1104a'>Ηλεκτρονική Φυσική A1</p>
                            <p class="function1105b_steps" style="display:none" data-step='1105b'>Κυκλώματα Συνεχούς Ρεύματος A2</p>
                            <p class="function1503_steps" style="display:none" data-step='1503'>Σχεδίαση Λειτουργικών Συστημάτων</p>
                            <p class="function1701_steps" style="display:none" data-step='1701'>Δίκτυα Υπολογιστών</p>
                            <p class="function1944_steps" style="display:none" data-step='1944'>Διαχείριση Συστήματος και Υπηρεσιών DBMS</p>
                            <p class="function1950_steps" style="display:none" data-step='1950'>Σημασιολογικός Ιστός</p>
                            <p class="function1915_steps" style="display:none" data-step='1915'>Βιοϊατρική Τεχνολογία</p>
                        </td>
                            <td id="Παρασκευή">
                                <p class="function1305_steps" style="display:none" data-step='1305'>Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                                <p class="function1702_steps" style="display:none" data-step='1702'>Ηλεκτρονικά Ισχύος</p>
                                <p class="function1947_steps" style="display:none" data-step='1947'>Προηγμένη Μηχανική Μάθηση</p>
                                <p class="function1969_steps" style="display:none" data-step='1969'>Γραφικά Υπολογιστών</p>
                                <p class="function1972_steps" style="display:none" data-step='1972'>Δικτύωση Καθορισμένη από Λογισμικό</p>
                            </td>
                        </tr>
                        <tr>
                        <td scope="row">10:00 - 11:00</td>
                        <td>
                            <p class="function1104a_steps" style="display:none" data-step='1104a'>Ηλεκτρονική Φυσική A1</p>
                            <p class="function1103b_steps" style="display:none" data-step='1103b'>Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                            <p class="function1301_steps" style="display:none" data-step='1301'>Θεωρία Πιθανοτήτων και Στατιστική</p>
                            <p class="function1502_steps" style="display:none" data-step='1502'>Μικροελεγκτές</p>
                            <p class="function1702_steps" style="display:none" data-step='1702'>Ηλεκτρονικά Ισχύος</p>
                            <p class="function1969_steps" style="display:none" data-step='1969'>Γραφικά Υπολογιστών</p>
                        </td>
                        <td>
                            <p class="function1105a_steps" style="display:none" data-step='1105a'>Κυκλώματα Συνεχούς Ρεύματος A1</p>
                            <p class="function1504_steps" style="display:none" data-step='1504'>Ηλεκτρονικές Διατάξεις</p>
                            <p class="function1949_steps" style="display:none" data-step='1949'>Κατανεμημένα Συστήματα</p>
                            <p class="function1913_steps" style="display:none" data-step='1913'>ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                        </td>
                        <td>
                            <p class="function1103a_steps" style="display:none" data-step='1103a'>Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                            <p class="function1301_steps" style="display:none" data-step='1301'>Θεωρία Πιθανοτήτων και Στατιστική</p>
                            <p class="function1505_steps" style="display:none" data-step='1505'>Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                            <p class="function1945_steps" style="display:none" data-step='1945'>Ευφυή Συστήματα</p>
                            <p class="function1949_steps" style="display:none" data-step='1949'>Κατανεμημένα Συστήματα</p>
                            <p class="function1913_steps" style="display:none" data-step='1913'>ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                        </td>
                        <td>
                            <p class="function1104a_steps" style="display:none" data-step='1104a'>Ηλεκτρονική Φυσική A1</p>
                            <p class="function1105b_steps" style="display:none" data-step='1105b'>Κυκλώματα Συνεχούς Ρεύματος A2</p>
                            <p class="function1503_steps" style="display:none" data-step='1503'>Σχεδίαση Λειτουργικών Συστημάτων</p>
                            <p class="function1701_steps" style="display:none" data-step='1701'>Δίκτυα Υπολογιστών</p>
                            <p class="function1944_steps" style="display:none" data-step='1944'>Διαχείριση Συστήματος και Υπηρεσιών DBMS</p>
                            <p class="function1950_steps" style="display:none" data-step='1950'>Σημασιολογικός Ιστός</p>
                            <p class="function1915_steps" style="display:none" data-step='1915'>Βιοϊατρική Τεχνολογία</p>
                        </td>
                        <td>
                            <p class="function1305_steps" style="display:none" data-step='1305'>Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                            <p class="function1702_steps" style="display:none" data-step='1702'>Ηλεκτρονικά Ισχύος</p>
                            <p class="function1947_steps" style="display:none" data-step='1947'>Προηγμένη Μηχανική Μάθηση</p>
                            <p class="function1969_steps" style="display:none" data-step='1969'>Γραφικά Υπολογιστών</p>
                            <p class="function1972_steps" style="display:none" data-step='1972'>Δικτύωση Καθορισμένη από Λογισμικό</p>
                        </td>
                    </tr>
                        <tr>
                        <td scope="row">11:00 - 12:00</td>
                            <td id="Δευτέρα">
                                <p class="function1103a_steps" style="display:none" data-step='1103a'>Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                                <p class="function1104b_steps" style="display:none" data-step='1104b'>Ηλεκτρονική Φυσική A2</p>
                                <p class="function1302_steps" style="display:none" data-step='1302'>Μαθηματικά ΙΙI</p>
                                <p class="function1505_steps" style="display:none" data-step='1505'>Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                                <p class="function1701_steps" style="display:none" data-step='1701'>Δίκτυα Υπολογιστών</p>
                                <p class="function1975_steps" style="display:none" data-step='1975'>Τεχνολογία Πολυμέσων</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1101a_steps" style="display:none" data-step='1101a'>Μαθηματικά I A1</p>
                                <p class="function1105b_steps" style="display:none" data-step='1105b'>Κυκλώματα Συνεχούς Ρεύματος A2</p>
                                <p class="function1501_steps" style="display:none" data-step='1501'>Ασύρματες Επικοινωνίες</p>
                                <p class="function1712_steps" style="display:none" data-step='1712'>Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                                <p class="function1744_steps" style="display:none" data-step='1744'>Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                                <p class="function1972_steps" style="display:none" data-step='1972'>Δικτύωση Καθορισμένη από Λογισμικό</p>
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1101a_steps" style="display:none" data-step='1101a'>Μαθηματικά I A1</p>
                                <p class="function1103b_steps" style="display:none" data-step='1103b'>Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                                <p class="function1304_steps" style="display:none" data-step='1304'>Γλώσσες και Τεχνολογίες Ιστού</p>
                                <p class="function1503_steps" style="display:none" data-step='1503'>Σχεδίαση Λειτουργικών Συστημάτων</p>
                                <p class="function1950_steps" style="display:none" data-step='1950'>Σημασιολογικός Ιστός</p>
                                <p class="function1942_steps" style="display:none" data-step='1942'>Επιχειρησιακή Έρευνα</p>
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1105a_steps" style="display:none" data-step='1105a'>Κυκλώματα Συνεχούς Ρεύματος A1</p>
                                <p class="function1104b_steps" style="display:none" data-step='1104b'>Ηλεκτρονική Φυσική A2</p>
                                <p class="function1305_steps" style="display:none" data-step='1305'>Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                                <p class="function1501_steps" style="display:none" data-step='1501'>Ασύρματες Επικοινωνίες</p>
                                <p class="function1743_steps" style="display:none" data-step='1743'>Τεχνολογία Βάσεων Δεδομένων</p>
                                <p class="function1942_steps" style="display:none" data-step='1942'>Επιχειρησιακή Έρευνα</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1102b_steps" style="display:none" data-step='1102b'>Δομημένος Προγραμματισμός A2</p>
                                <p class="function1302_steps" style="display:none" data-step='1302'>Μαθηματικά ΙΙI</p>
                                <p class="function1712_steps" style="display:none" data-step='1712'>Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                                <p class="function1744_steps" style="display:none" data-step='1744'>Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                                <p class="function1975_steps" style="display:none" data-step='1975'>Τεχνολογία Πολυμέσων</p>
                                <p class="function1945_steps" style="display:none" data-step='1945'>Ευφυή Συστήματα</p>
                            </td>
                        </tr>
                        <td scope="row">12:00 - 13:00</td>
                            <td id="Δευτέρα">
                                <p class="function1103a_steps" style="display:none" data-step='1103a'>Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                                <p class="function1104b_steps" style="display:none" data-step='1104b'>Ηλεκτρονική Φυσική A2</p>
                                <p class="function1302_steps" style="display:none" data-step='1302'>Μαθηματικά ΙΙI</p>
                                <p class="function1505_steps" style="display:none" data-step='1505'>Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                                <p class="function1701_steps" style="display:none" data-step='1701'>Δίκτυα Υπολογιστών</p>
                                <p class="function1975_steps" style="display:none" data-step='1975'>Τεχνολογία Πολυμέσων</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1101a_steps" style="display:none" data-step='1101a'>Μαθηματικά I A1</p>
                                <p class="function1105b_steps" style="display:none" data-step='1105b'>Κυκλώματα Συνεχούς Ρεύματος A2</p>
                                <p class="function1501_steps" style="display:none" data-step='1501'>Ασύρματες Επικοινωνίες</p>
                                <p class="function1712_steps" style="display:none" data-step='1712'>Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                                <p class="function1744_steps" style="display:none" data-step='1744'>Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                                <p class="function1972_steps" style="display:none" data-step='1972'>Δικτύωση Καθορισμένη από Λογισμικό</p>
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1101a_steps" style="display:none" data-step='1101a'>Μαθηματικά I A1</p>
                                <p class="function1103b_steps" style="display:none" data-step='1103b'>Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                                <p class="function1304_steps" style="display:none" data-step='1304'>Γλώσσες και Τεχνολογίες Ιστού</p>
                                <p class="function1503_steps" style="display:none" data-step='1503'>Σχεδίαση Λειτουργικών Συστημάτων</p>
                                <p class="function1950_steps" style="display:none" data-step='1950'>Σημασιολογικός Ιστός</p>
                                <p class="function1942_steps" style="display:none" data-step='1942'>Επιχειρησιακή Έρευνα</p>
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1105a_steps" style="display:none" data-step='1105a'>Κυκλώματα Συνεχούς Ρεύματος A1</p>
                                <p class="function1104b_steps" style="display:none" data-step='1104b'>Ηλεκτρονική Φυσική A2</p>
                                <p class="function1305_steps" style="display:none" data-step='1305'>Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                                <p class="function1501_steps" style="display:none" data-step='1501'>Ασύρματες Επικοινωνίες</p>
                                <p class="function1743_steps" style="display:none" data-step='1743'>Τεχνολογία Βάσεων Δεδομένων</p>
                                <p class="function1942_steps" style="display:none" data-step='1942'>Επιχειρησιακή Έρευνα</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1102b_steps" style="display:none" data-step='1102b'>Δομημένος Προγραμματισμός A2</p>
                                <p class="function1302_steps" style="display:none" data-step='1302'>Μαθηματικά ΙΙI</p>
                                <p class="function1712_steps" style="display:none" data-step='1712'>Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                                <p class="function1744_steps" style="display:none" data-step='1744'>Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                                <p class="function1975_steps" style="display:none" data-step='1975'>Τεχνολογία Πολυμέσων</p>
                                <p class="function1945_steps" style="display:none" data-step='1945'>Ευφυή Συστήματα</p>
                            </td>
                        </tr>
                        <td scope="row">13:00 - 14:00</td>
                            <td id="Δευτέρα"></td>
                            <td id="Τρίτη"></td>
                            <td id="Τετάρτη"></td>
                            <td id="Πέμπτη"></td>
                            <td id="Παρασκευή"></td>
                        </tr>
                        <td scope="row">14:00 - 15:00</td>
                            <td id="Δευτέρα">
                                <p class="function1101b_steps" style="display:none" data-step='1101b'>Μαθηματικά I A2</p>
                                <p class="function1504_steps" style="display:none" data-step='1504'>Ηλεκτρονικές Διατάξεις</p>
                                <p class="function1711_steps" style="display:none" data-step='1711'>Συστήματα Αυτομάτου Ελέγχου</p>
                                <p class="function1743_steps" style="display:none" data-step='1743'>Τεχνολογία Βάσεων Δεδομένων</p>
                                <p class="function1912_steps" style="display:none" data-step='1912'>Ρομποτική</p>
                                <p class="function1974_steps" style="display:none" data-step='1974'>Δορυφορικές Επικοινωνίες</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1711_steps" style="display:none" data-step='1711'>Συστήματα Αυτομάτου Ελέγχου</p>
                                <p class="function1974_steps" style="display:none" data-step='1974'>Δορυφορικές Επικοινωνίες</p
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1101b_steps" style="display:none" data-step='1101b'>Μαθηματικά I A2</p>
                                <p class="function1102a_steps" style="display:none" data-step='1102a'>Δομημένος Προγραμματισμός A1</p>
                                <p class="function1303_steps" style="display:none" data-step='1303'>Επεξεργασία Σήματος</p>
                                <p class="function1502_steps" style="display:none" data-step='1502'>Μικροελεγκτές</p>
                                <p class="function1742_steps" style="display:none" data-step='1742'>Μηχανική Λογισμικού</p>
                                <p class="function1944_steps" style="display:none" data-step='1944'>Διαχείριση Συστήματος και Υπηρεσιών DBMS</p>
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1303_steps" style="display:none" data-step='1303'>Επεξεργασία Σήματος</p>
                                <p class="function1742_steps" style="display:none" data-step='1742'>Μηχανική Λογισμικού</p>
                                <p class="function1941_steps" style="display:none" data-step='1941'>Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1102a_steps" style="display:none" data-step='1102a'>Δομημένος Προγραμματισμός A1</p>
                                <p class="function1304_steps" style="display:none" data-step='1304'>Γλώσσες και Τεχνολογίες Ιστού</p>
                                <p class="function1912_steps" style="display:none" data-step='1912'>Ρομποτική</p>
                                <p class="function1941_steps" style="display:none" data-step='1941'>Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                            </td>
                        </tr>
                        <td scope="row">15:00 - 16:00</td>
                            <td id="Δευτέρα">
                                <p class="function1101b_steps" style="display:none" data-step='1101b'>Μαθηματικά I A2</p>
                                <p class="function1504_steps" style="display:none" data-step='1504'>Ηλεκτρονικές Διατάξεις</p>
                                <p class="function1711_steps" style="display:none" data-step='1711'>Συστήματα Αυτομάτου Ελέγχου</p>
                                <p class="function1743_steps" style="display:none" data-step='1743'>Τεχνολογία Βάσεων Δεδομένων</p>
                                <p class="function1912_steps" style="display:none" data-step='1912'>Ρομποτική</p>
                                <p class="function1974_steps" style="display:none" data-step='1974'>Δορυφορικές Επικοινωνίες</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1711_steps" style="display:none" data-step='1711'>Συστήματα Αυτομάτου Ελέγχου</p>
                                <p class="function1974_steps" style="display:none" data-step='1974'>Δορυφορικές Επικοινωνίες</p>
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1101b_steps" style="display:none" data-step='1101b'>Μαθηματικά I A2</p>
                                <p class="function1102a_steps" style="display:none" data-step='1102a'>Δομημένος Προγραμματισμός A1</p>
                                <p class="function1303_steps" style="display:none" data-step='1303'>Επεξεργασία Σήματος</p>
                                <p class="function1502_steps" style="display:none" data-step='1502'>Μικροελεγκτές</p>
                                <p class="function1742_steps" style="display:none" data-step='1742'>Μηχανική Λογισμικού</p>
                                <p class="function1944_steps" style="display:none" data-step='1944'>Διαχείριση Συστήματος και Υπηρεσιών DBMS</p
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1303_steps" style="display:none" data-step='1303'>Επεξεργασία Σήματος</p>
                                <p class="function1742_steps" style="display:none" data-step='1742'>Μηχανική Λογισμικού</p>
                                <p class="function1941_steps" style="display:none" data-step='1941'>Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1102a_steps" style="display:none" data-step='1102a'>Δομημένος Προγραμματισμός A1</p>
                                <p class="function1304_steps" style="display:none" data-step='1304'>Γλώσσες και Τεχνολογίες Ιστού</p>
                                <p class="function1912_steps" style="display:none" data-step='1912'>Ρομποτική</p>
                                <p class="function1941_steps" style="display:none" data-step='1941'>Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                            </td>
                        </tr>
                        <td scope="row">16:00 - 17:00</td>
                            <td id="Δευτέρα">
                                <p class="function1943_steps" style="display:none" data-step='1943'>Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1915_steps" style="display:none" data-step='1915'>Βιοϊατρική Τεχνολογία</p>
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1102b_steps" style="display:none" data-step='1102b'>Δομημένος Προγραμματισμός A2</p>
                                <p class="function1771_steps" style="display:none" data-step='1771'>Τεχνολογίες Ήχου και Εικόνας</p>
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1973_steps" style="display:none" data-step='1973'>Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1943_steps" style="display:none" data-step='1943'>Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                            </td>
                        </tr>
                        <td scope="row">17:00 - 18:00</td>
                            <td id="Δευτέρα">
                                <p class="function1943_steps" style="display:none" data-step='1943'>Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                            </td>
                            <td id="Τρίτη">
                                <p class="function1915_steps" style="display:none" data-step='1915'>Βιοϊατρική Τεχνολογία</p>
                            </td>
                            <td id="Τετάρτη">
                                <p class="function1102b_steps" style="display:none" data-step='1102b'>Δομημένος Προγραμματισμός A2</p>
                                <p class="function1771_steps" style="display:none" data-step='1771'>Τεχνολογίες Ήχου και Εικόνας</p>
                            </td>
                            <td id="Πέμπτη">
                                <p class="function1973_steps" style="display:none" data-step='1973'>Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                            </td>
                            <td id="Παρασκευή">
                                <p class="function1943_steps" style="display:none" data-step='1943'>Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                            </td>
                        </tr>
                        <td scope="row">18:00 - 19:00</td>
                            <td id="Δευτέρα"></td>
                            <td id="Τρίτη"></td>
                            <td id="Τετάρτη"></td>
                            <td id="Πέμπτη">
                                <p class="function1973_steps" style="display:none" data-step='1973'>Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                            </td>
                            <td id="Παρασκευή"></td>
                        </tr>
                        <td scope="row">19:00 - 20:00</td>
                            <td id="Δευτέρα"></td>
                            <td id="Τρίτη"></td>
                            <td id="Τετάρτη"></td>
                            <td id="Πέμπτη">
                                <p class="function1973_steps" style="display:none" data-step='1973'>Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                            </td>
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
                        <!-- 1ο Εξάμηνο -->
                            <p class="function1101a_steps" style="display:none" data-step='1101a'>Μαθηματικά I A1</p>
                            <p class="function1101b_steps" style="display:none" data-step='1101b'>Μαθηματικά I A2</p>
                            <p class="function1102a_steps" style="display:none" data-step='1102a'>Δομημένος Προγραμματισμός A1</p>
                            <p class="function1102b_steps" style="display:none" data-step='1102b'>Δομημένος Προγραμματισμός A2</p>
                            <p class="function1103a_steps" style="display:none" data-step='1103a'>Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                            <p class="function1103b_steps" style="display:none" data-step='1103b'>Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                            <p class="function1104a_steps" style="display:none" data-step='1104a'>Ηλεκτρονική Φυσική A1</p>
                            <p class="function1104b_steps" style="display:none" data-step='1104b'>Ηλεκτρονική Φυσική A2</p>
                            <p class="function1105a_steps" style="display:none" data-step='1105a'>Κυκλώματα Συνεχούς Ρεύματος A1</p>
                            <p class="function1105b_steps" style="display:none" data-step='1105b'>Κυκλώματα Συνεχούς Ρεύματος A2</p>
                        <!-- 3ο Εξάμηνο -->
                            <p class="function1301_steps" style="display:none" data-step='1301'>Θεωρία Πιθανοτήτων και Στατιστική</p>
                            <p class="function1302_steps" style="display:none" data-step='1302'>Μαθηματικά ΙΙI</p>
                            <p class="function1303_steps" style="display:none" data-step='1303'>Επεξεργασία Σήματος</p>
                            <p class="function1304_steps" style="display:none" data-step='1304'>Γλώσσες και Τεχνολογίες Ιστού</p>
                            <p class="function1305_steps" style="display:none" data-step='1305'>Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                        <!-- 5ο Εξάμηνο -->
                            <p class="function1501_steps" style="display:none" data-step='1501'>Ασύρματες Επικοινωνίες</p>
                            <p class="function1502_steps" style="display:none" data-step='1502'>Μικροελεγκτές</p>
                            <p class="function1503_steps" style="display:none" data-step='1503'>Σχεδίαση Λειτουργικών Συστημάτων</p>
                            <p class="function1504_steps" style="display:none" data-step='1504'>Ηλεκτρονικές Διατάξεις</p>
                            <p class="function1505_steps" style="display:none" data-step='1505'>Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                        <!-- 7ο Εξάμηνο -->
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
                        <!-- 9ο Εξάμηνο -->
                            <p class="function1911_steps" style="display:none" data-step='1911'>Εφαρμογές Ενσωματωμένων Συστημάτων</p>
                            <p class="function1912_steps" style="display:none" data-step='1912'>Ρομποτική</p>
                            <p class="function1913_steps" style="display:none" data-step='1913'>ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                            <p class="function1914_steps" style="display:none" data-step='1914'>Απτικές Διεπαφές</p>
                            <p class="function1915_steps" style="display:none" data-step='1915'>Βιοϊατρική Τεχνολογία</p>
                            <p class="function1916_steps" style="display:none" data-step='1916'>Συστήματα Μετρήσεων Υποβοηθούμενων από Η/Υ</p>
                            <p class="function1941_steps" style="display:none" data-step='1941'>Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                            <p class="function1942_steps" style="display:none" data-step='1942'>Επιχειρησιακή Έρευνα</p>
                            <p class="function1943_steps" style="display:none" data-step='1943'>Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                            <p class="function1944_steps" style="display:none" data-step='1944'>Διαχείριση Συστήματος και Υπηρεσιών DBMS</p>
                            <p class="function1945_steps" style="display:none" data-step='1945'>Ευφυή Συστήματα</p>
                            <p class="function1946_steps" style="display:none" data-step='1946'>Προηγμένα Θέματα Τεχνητής Νοημοσύνης</p>
                            <p class="function1947_steps" style="display:none" data-step='1947'>Προηγμένη Μηχανική Μάθηση</p>
                            <p class="function1948_steps" style="display:none" data-step='1948'>Ανάπτυξη Ολοκληρωμένων Πληροφοριακών Συστημάτων</p>
                            <p class="function1949_steps" style="display:none" data-step='1949'>Κατανεμημένα Συστήματα</p>
                            <p class="function1950_steps" style="display:none" data-step='1950'>Σημασιολογικός Ιστός</p>
                            <p class="function1969_steps" style="display:none" data-step='1969'>Γραφικά Υπολογιστών</p>
                            <p class="function1971_steps" style="display:none" data-step='1971'>Ασφάλεια Δικτύων και Επικοινωνιών</p>
                            <p class="function1972_steps" style="display:none" data-step='1972'>Δικτύωση Καθορισμένη από Λογισμικό</p>
                            <p class="function1973_steps" style="display:none" data-step='1973'>Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                            <p class="function1974_steps" style="display:none" data-step='1974'>Δορυφορικές Επικοινωνίες</p>
                            <p class="function1975_steps" style="display:none" data-step='1975'>Τεχνολογία Πολυμέσων</p>
                    </div>
                </section>
                <section class="cards">
                    <div class="card">
                        <p class="card-title">1o Εξάμηνο - Ομάδα 1</p>
                        <p><input type="checkbox" data-step='1101a' onclick="myFunction(this)">Μαθηματικά I A1</p>
                        <p><input type="checkbox" data-step='1102a' onclick="myFunction(this)">Δομημένος Προγραμματισμός A1</p>
                        <p><input type="checkbox" data-step='1103a' onclick="myFunction(this)">Εισαγωγή στην Επιστήμη των Υπολογιστών A1</p>
                        <p><input type="checkbox" data-step='1104a' onclick="myFunction(this)">Ηλεκτρονική Φυσική A1</p>
                        <p><input type="checkbox" data-step='1105a' onclick="myFunction(this)">Κυκλώματα Συνεχούς Ρεύματος A1</p>
                    </div>
                    <div class="card">
                        <p class="card-title">1o Εξάμηνο - Ομάδα 2</p>
                        <p><input type="checkbox" data-step='1101b' onclick="myFunction(this)">Μαθηματικά I A2</p>
                        <p><input type="checkbox" data-step='1102b' onclick="myFunction(this)">Δομημένος Προγραμματισμός A2</p>
                        <p><input type="checkbox" data-step='1103b' onclick="myFunction(this)">Εισαγωγή στην Επιστήμη των Υπολογιστών A2</p>
                        <p><input type="checkbox" data-step='1104b' onclick="myFunction(this)">Ηλεκτρονική Φυσική A2</p>
                        <p><input type="checkbox" data-step='1105b' onclick="myFunction(this)">Κυκλώματα Συνεχούς Ρεύματος A2</p>
                    </div>
                    <div class="card">
                        <p class="card-title">3o Εξάμηνο</p>
                        <p><input type="checkbox" data-step='1301' onclick="myFunction(this)">Θεωρία Πιθανοτήτων και Στατιστική</p>
                        <p><input type="checkbox" data-step='1302' onclick="myFunction(this)">Μαθηματικά ΙΙI</p>
                        <p><input type="checkbox" data-step='1303' onclick="myFunction(this)">Επεξεργασία Σήματος</p>
                        <p><input type="checkbox" data-step='1304' onclick="myFunction(this)">Γλώσσες και Τεχνολογίες Ιστού</p>
                        <p><input type="checkbox" data-step='1305' onclick="myFunction(this)">Δομές Δεδομένων και Ανάλυση Αλγορίθμων</p>
                    </div>
                    <div class="card">
                        <p class="card-title">5o Εξάμηνο</p>
                        <p><input type="checkbox" data-step='1501' onclick="myFunction(this)">Ασύρματες Επικοινωνίες</p>
                        <p><input type="checkbox" data-step='1502' onclick="myFunction(this)">Μικροελεγκτές</p>
                        <p><input type="checkbox" data-step='1503' onclick="myFunction(this)">Σχεδίαση Λειτουργικών Συστημάτων</p>
                        <p><input type="checkbox" data-step='1504' onclick="myFunction(this)">Ηλεκτρονικές Διατάξεις</p>
                        <p><input type="checkbox" data-step='1505' onclick="myFunction(this)">Αλληλεπίδραση Ανθρώπου-Μηχανής</p>
                    </div>
                    <div class="card">
                        <p class="card-title">7o Εξάμηνο</p>
                        <p><input type="checkbox" data-step='1701' onclick="myFunction(this)">Δίκτυα Υπολογιστών</p>
                        <p><input type="checkbox" data-step='1702' onclick="myFunction(this)">Ηλεκτρονικά Ισχύος</p>
                        <p class="card-title">Κοινά Μαθήματα Επιλογής Ανεξάρτητα από Ομάδα (ΚΟΙΝ)</p>
                        <p><input type="checkbox" data-step='1771' onclick="myFunction(this)">Τεχνολογίες Ήχου και Εικόνας</p>
                    </div>
                    <div class="card">
                        <p class="card-title">7o Εξάμηνο - Ομάδα Ηλεκτρονικών και Ενσωματωμένων Συστημάτων (ΗΛΕΣ)</p>
                        <p><input type="checkbox" data-step='1711' onclick="myFunction(this)">Συστήματα Αυτομάτου Ελέγχου</p>
                        <p><input type="checkbox" data-step='1712' onclick="myFunction(this)">Αισθητήρια και Επεξεργασία Μετρήσεων</p>
                        <p><input type="checkbox" data-step='1713' onclick="myFunction(this)">Προγραμματιζόμενοι Λογικοί Ελεγκτές</p>
                        <p><input type="checkbox" data-step='1714' onclick="myFunction(this)">Σχεδίαση Επαναπροσδιοριζόμενων Ψηφιακών Συστημάτων (FPGA) (Δεν θα παραδοθεί αυτό το εξάμηνο)</p>
                    </div>
                    <div class="card">
                        <p class="card-title">7o Εξάμηνο - Ομάδα Προγραμματισμού, Δεδομένων και Τεχνητής Νοημοσύνης (ΠΔΤΝ)</p>
                        <p><input type="checkbox" data-step='1741' onclick="myFunction(this)">Εισαγωγή στην Αναλυτική των Δεδομένων (Δεν θα παραδοθεί αυτό το εξάμηνο)</p>
                        <p><input type="checkbox" data-step='1742' onclick="myFunction(this)">Μηχανική Λογισμικού</p>
                        <p><input type="checkbox" data-step='1743' onclick="myFunction(this)">Τεχνολογία Βάσεων Δεδομένων</p>
                        <p><input type="checkbox" data-step='1744' onclick="myFunction(this)">Προηγμένες Αρχιτεκτονικές Υπολογιστών και Προγραμματισμός Παράλληλων Συστημάτων</p>
                    </div>
                    <div class="card">
                        <p class="card-title">9o Εξάμηνο - Ομάδα Ηλεκτρονικών και Ενσωματωμένων Συστημάτων (ΗΛΕΣ)</p>
                        <p><input type="checkbox" data-step='1911' onclick="myFunction(this)">Εφαρμογές Ενσωματωμένων Συστημάτων</p>
                        <p><input type="checkbox" data-step='1912' onclick="myFunction(this)">Ρομποτική</p>
                        <p><input type="checkbox" data-step='1913' onclick="myFunction(this)">ΑΠΕ και Ευφυή Ηλεκτρικά Δίκτυα **</p>
                        <p><input type="checkbox" data-step='1914' onclick="myFunction(this)">Απτικές Διεπαφές</p>
                        <p><input type="checkbox" data-step='1915' onclick="myFunction(this)">Βιοϊατρική Τεχνολογία</p>
                        <p><input type="checkbox" data-step='1916' onclick="myFunction(this)">Συστήματα Μετρήσεων Υποβοηθούμενων από Η/Υ (Δεν θα προσφερθεί αυτό το εξάμηνο)</p>
                    </div>
                    <div class="card">
                        <p class="card-title">9o Εξάμηνο - Ομάδα Προγραμματισμού, Δεδομένων και Τεχνητής Νοημοσύνης (ΠΔΤΝ</p>
                        <p><input type="checkbox" data-step='1941' onclick="myFunction(this)">Ανάπτυξη Διαδικτυακών Συστημάτων και Εφαρμογών</p>
                        <p><input type="checkbox" data-step='1942' onclick="myFunction(this)">Επιχειρησιακή Έρευνα</p>
                        <p><input type="checkbox" data-step='1943' onclick="myFunction(this)">Ανάκτηση Πληροφοριών – Μηχανές Αναζήτησης</p>
                        <p><input type="checkbox" data-step='1944' onclick="myFunction(this)">Διαχείριση Συστήματος και Υπηρεσιών DBMS</p>
                        <p><input type="checkbox" data-step='1945' onclick="myFunction(this)">Ευφυή Συστήματα</p>
                        <p><input type="checkbox" data-step='1946' onclick="myFunction(this)">Προηγμένα Θέματα Τεχνητής Νοημοσύνης (Δεν θα προσφερθεί αυτό το εξάμηνο)</p>
                        <p><input type="checkbox" data-step='1947' onclick="myFunction(this)">Προηγμένη Μηχανική Μάθηση</p>
                        <p><input type="checkbox" data-step='1948' onclick="myFunction(this)">Ανάπτυξη Ολοκληρωμένων Πληροφοριακών Συστημάτων (Δεν θα προσφερθεί αυτό το εξάμηνο)</p>
                        <p><input type="checkbox" data-step='1949' onclick="myFunction(this)">Κατανεμημένα Συστήματα</p>
                        <p><input type="checkbox" data-step='1950' onclick="myFunction(this)">Σημασιολογικός Ιστός</p>
                        <p><input type="checkbox" data-step='1969' onclick="myFunction(this)">Γραφικά Υπολογιστών</p>
                    </div>
                    <div class="card">
                        <p class="card-title">9o Εξάμηνο - Κοινά Μαθήματα Επιλογής Ανεξάρτητα από Ομάδα (ΚΟΙΝ)</p>
                        <p><input type="checkbox" data-step='1971' onclick="myFunction(this)">Ασφάλεια Δικτύων και Επικοινωνιών (Δεν θα προσφερθεί αυτό το εξάμηνο)</p>
                        <p><input type="checkbox" data-step='1972' onclick="myFunction(this)">Δικτύωση Καθορισμένη από Λογισμικό</p>
                        <p><input type="checkbox" data-step='1973' onclick="myFunction(this)">Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                        <p><input type="checkbox" data-step='1974' onclick="myFunction(this)">Δορυφορικές Επικοινωνίες</p>
                        <p><input type="checkbox" data-step='1975' onclick="myFunction(this)">Τεχνολογία Πολυμέσων</p>
                    </div>
                    <div class="card">
                        <p class="card-title">9o Εξάμηνο - Κοινά Μαθήματα Επιλογής Ανεξάρτητα από Ομάδα (ΚΟΙΝ)</p>
                        <p><input type="checkbox" data-step='1971' onclick="myFunction(this)">Ασφάλεια Δικτύων και Επικοινωνιών (Δεν θα προσφερθεί αυτό το εξάμηνο)</p>
                        <p><input type="checkbox" data-step='1972' onclick="myFunction(this)">Δικτύωση Καθορισμένη από Λογισμικό</p>
                        <p><input type="checkbox" data-step='1973' onclick="myFunction(this)">Ειδικά Θέματα Δικτύων (CCNA) 2</p>
                        <p><input type="checkbox" data-step='1974' onclick="myFunction(this)">Δορυφορικές Επικοινωνίες</p>
                        <p><input type="checkbox" data-step='1975' onclick="myFunction(this)">Τεχνολογία Πολυμέσων</p>
                    </div>
                </section>
            </main>
        `;
    }
}
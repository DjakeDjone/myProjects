<template>
    <div>
        <h1>CABS</h1>
        <p>Here is a summary of CABS.
        </p>
        <main>
            <div>
                <h2>BIOS</h2>
                <p>
                    Basic Input Output System.
                    Schnittstelle zwischen Hardware und Betriebssystem.
                    Ist im Flash-Speicher des Motherboards gespeichert.
                </p>
                <br>
                <h3>UEFI</h3>
                <p>
                    Unified Extensible Firmware Interface.
                    Nachfolger von BIOS.
                    Sicherer, ohne Signatur kann nicht gebootet werden.
                    Kann mit Maus bedient werden.
                </p>
                <br>
                <h3>Bootloader</h3>
                <p>
                    Programm, das den Bootvorgang eines Computers steuert.
                    Lädt das Betriebssystem in den Arbeitsspeicher.
                    Kann mehrere Betriebssysteme verwalten.
                </p>
                <br>
            </div>
            <div>
                <h2>
                    Cloud
                </h2>
                <h3>
                    Public Cloud
                </h3>
                <p>
                    Öffentlich zugänglich.
                    Betreiber stellt Infrastruktur zur Verfügung.
                    Nutzer zahlt für Nutzung.
                    Beispiele: Google Drive, Dropbox, iCloud.
                    <i>Vorteile: Kosteneinsparung: Infrastruktur und Personalkosten werden an Cloudanbieter ausgelagert,
                        fast unendlich Skalierbar, sicherer, Redundanz, Verfügbarkeit</i>
                    <i>Vendor lock-in: jeder Anbieter hat spezifische Services -> Anbieter wechseln ist schwerer; sensible
                        Daten liegen bei Drittanbietern</i>
                </p>
                <br>
                <h3>
                    Private Cloud
                </h3>
                <p>
                    Nicht öffentlich zugänglich.
                    Maßgeschneidert für das Unternehmen
                    <i>
                        Nachteile: hoher Kostenaufwand, schlecht Skalierbar
                    </i>
                </p>
                <br>
                <h3>
                    Hybrid Cloud
                </h3>
                <p>
                    Kombination aus einer Private mit ein- oder mehreren Public Clouds.
                    <i>
                        Vorteile: hohe Flexibilität, hohe Skalierbarkeit, hohe Verfügbarkeit
                    </i>
                    <i>
                        Nachteile: hoher Kostenaufwand, hoher Administrationsaufwand,
                        Risiko, dass Daten auf der falschen Cloud liegen
                    </i>
                </p>
                <br>
                <h3>
                    SaaS
                </h3>
                <p>
                    Software as a Service.
                    Anbieter stellt Software zur Verfügung.
                    Nutzer zahlt für Nutzung.
                    Beispiele: Google Docs, Office 365, Dropbox, iCloud.
                    <i>
                        Vorteile: Kosteneinsparung: Infrastruktur und Personalkosten werden an Cloudanbieter ausgelagert,
                        fast unendlich Skalierbar, sicherer, Redundanz, Verfügbarkeit
                    </i>
                </p>
                <br>
                <h3>
                    Paas
                </h3>
                <p>
                    Platform as a Service.
                    Setzt auf LaaS auf.
                    Stellt zusätzlich Entwicklungsumgebung zur Verfügung.

                    <i>
                        Vorteile: Wenig Know-How nötig
                    </i>
                    <i>
                        Nachteile: Wenig Kontrolle über Infrastruktur, Vendor lock-in
                    </i>
                </p>
                <br>
                <h3>
                    CaaS
                </h3>
                <p>
                    Communication as a Service.
                    Telephon, Video, Messaging, Push-Benachrichtiungen.
                </p>
            </div>
            <div>
                <h2>
                    Virtualisierung
                </h2>
                <p>
                    Gründe:
                <ul>
                    <li>
                        Ressourcen werden besser ausgenutzt
                    </li>
                    <li>
                        Sicherheit: VMs sind voneinander isoliert
                    </li>
                    <li>
                        Vereinfachte Administration
                    </li>
                    <li>
                        Unterstützung alter Anwendungen
                    </li>
                </ul>
                Nachteile:
                <ul>
                    <li>
                        Performanceverlust
                    </li>
                    <li>
                        Sicherheitslücken
                    </li>
                    <li>
                        Komplexität
                    </li>
                </ul>
                </p>
                <div class="info">
                    <h3>Begriffe:
                        Reale Maschine,
                        Virtuelle Maschine,
                        Hostbetriebssystem,
                        Gastbetriebssystem,
                        Virtual Machine Monitor (VMM),
                    </h3>
                </div>
                <br>
                <h3>
                    Vollständige Virtualisierung
                </h3>
                <p>
                    VMM emuliert Hardware.
                    Gastbetriebssystem läuft auf VMM.
                    Gastbetriebssystem ist nicht modifiziert.
                    <i>
                        Vorteile: Gastbetriebssystem kann ohne Änderungen installiert werden
                    </i>
                    <i>
                        Nachteile: Performanceverlust
                    </i>
                </p>
                <br>
                <h3>
                    Paravirtualisierung
                </h3>
                <p>
                    Gastbetriebssystem ist modifiziert. -> Es weiß, dass es auf einer VM läuft.
                    Gastbetriebssystem läuft auf VMM.
                    VMM emuliert Hardware.
                    <i>
                        Vorteile: Performancegewinn
                    </i>
                    <i>
                        Nachteile: Gastbetriebssystem muss modifiziert werden
                    </i>
                </p>
                <br>
                <h3>
                    HW Support: Hypervisor
                </h3>
                <p>
                    VT-x (Intel) oder AMD-V (AMD).
                </p>
                <br>
                <h3>
                    Type 1 Hypervisor
                </h3>
                <p>
                    VMM läuft direkt auf Hardware.
                    <i>
                        Vorteile: Performancegewinn
                    </i>
                    <i>
                        Nachteile: Hardware muss unterstützt werden
                    </i>
                    <div class="info">
                        <h3>
                            Hyper-V
                        </h3>
                        <p>
                            von Windows integrierter Hypervisor vom Typ 1.
                            unterstützt Paravirtualisierung. Benötigt Hardwareunterstützung.
                        </p>
                    </div>
                </p>
                <br>
                <h3>
                    Type 2 Hypervisor
                </h3>
                <p>
                    VMM läuft auf Hostbetriebssystem.
                    <i>
                        Vorteile: Hardware muss nicht unterstützt werden
                    </i>
                    <i>
                        Nachteile: Performanceverlust
                    </i>
                </p>
                <div class="container">
                    <h3>
                        Containervirtualisierung
                    </h3>
                    <p>
                        Container teilen sich den Kernel.
                        Manche Hosting Anbieter bieten Container hosting an. (z.B. Azure)
                        <i>
                            Vorteile: Performancegewinn
                        </i>
                        <i>
                            Nachteile: Container können nicht unterschiedliche Betriebssysteme haben
                        </i>
                    </p>
                </div>
                <img src="../assets/images/dockerArchitektur.png" alt="DockerImage">
            </div>
            <div>
                <h3>
                    Authentifizierung
                </h3>
                <ul>
                    <li>
                        <h4>
                            Token, Schlüssel, Secure ID
                        </h4>
                        <p>
                            etwas greifbares, unbemerktes kopieren schwierig, kombinierbar mit passwort(2FA)
                            <i>
                                Nachteile: verlierbar, kopierbar, kostet ca. 50€, unbequem
                            </i>
                        </p>
                    </li>
                    <li>
                        <h4>
                            Biometrische Authentifizierung
                        </h4>
                        <p>
                            Fingerabdruck, Iris, Gesichtserkennung, Stimme, Handvenenmuster
                            <i>
                                Nachteile: nicht sicher, nicht änderbar, nicht übertragbar, nicht anonym
                            </i>
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Benutzerverwaltung</h2>
                <h3>
                    Einzelplatzrechner
                </h3>
                <p>
                    besitzt keine Verbindung zu anderen Rechnern. (die meisten Homecomputer)
                    Trotzdem mehrere User möglich. Anmeldeinformationen werden lokal in der Security Account Manager(SAM) gespeichert.
                </p>
                <br>
                <h3>
                    Arbeitsgruppe
                </h3>
                <p>
                    mehrere Rechner, die miteinander verbunden sind.
                    Jeder Rechner hat eigene Benutzerverwaltung, in der alle Benutzer angelegt werden müssen.
                    Anmeldeinformationen werden lokal in der Security Account Manager(SAM) gespeichert.
                    maximal für 5-10 Rechner erträglich.
                </p>
                <br>
                <h3>
                    Domäne
                </h3>
                <p>
                    mehrere Rechner, die miteinander verbunden sind.
                    Benutzerverwaltung wird zentral auf einem Domain Controller (Active-Directory) gespeichert.
                    Anmeldeinformationen werden zentral auf einem Domain Controller gespeichert.
                    Benutzer können sich an jedem Rechner anmelden.
                    <i>
                        Vorteile: zentraler Zugriff, zentrale Verwaltung, zentrale Sicherheit, zentrale Datensicherung
                    </i>
                    <i>
                        Nachteile: Domain Controller ist Single Point of Failure
                    </i>
                </p>
                <div class="info">
                    Ein Tree Model ist möglich. (z.B. Firma mit mehreren Standorten)
                    Es gibt eine Root Domain, die mehrere Child Domains hat.
                    <br>
                    Mehrere Domänen können zu einem Forest zusammengefasst werden.
                </div>
                <br>
            </div>
            <div>
                <h1>
                    Dateisysteme
                </h1>
                <h2>
                    NTFS
                </h2>
                <p>
                    New Technology File System
                    Alle Informationen werden in einer Master File Table (MFT) gespeichert.
                    Beim Formatieren wird die MFT angelegt und fixer Speicherplatz reserviert.
                    Standardmäßig wird die MFT auf 12,5% der Festplattengröße angelegt.
                    <p class="explaining">
                        <b>Features:</b>
                        <ul>
                            <li>
                                <h4>
                                    Zugriffsrechte
                                </h4>
                                <p>
                                    Zugriffsrechte können für jeden Benutzer und jede Gruppe vergeben werden.
                                </p>
                            </li>
                            <li>
                                <h4>
                                    Verschlüsselung
                                </h4>
                                <p>
                                    Dateien können verschlüsselt werden. -> Sicherer
                                </p>
                            </li>
                            <li>
                                <h4>
                                    Komprimierung
                                </h4>
                                <p>
                                    Dateien können komprimiert werden.
                                </p>
                            </li>
                            <li>
                                <h4>
                                    Journaling
                                </h4>
                                <p>
                                    Dateisystem ist journalingfähig.
                                    <i>journalingfähig bedeuted, dass das Dateisystem nach einem Absturz wiederhergestellt werden kann</i>
                                </p>
                            </li>
                            <li>
                                <h4>
                                    Dateiversionsverwaltung
                                </h4>
                                <p>
                                    Dateien können in verschiedenen Versionen gespeichert werden.
                                    <i>
                                        Vorteile: Dateien können in verschiedenen Versionen gespeichert werden
                                    </i>
                                    <i>
                                        Nachteile: Dateien können in verschiedenen Versionen gespeichert werden
                                    </i>
                                </p>
                            </li>
                        </ul>
                    </p>
                </p>
            </div>
            <div class="info">
                <h2>
                    Chkdsk und NTFS Health
                </h2>
                <p>
                    Chkdsk ist ein Tool, das die Integrität des Dateisystems überprüft.
                    Es wird automatisch ausgeführt, wenn das Dateisystem nicht sauber geschlossen wurde.
                    Es kann auch manuell ausgeführt werden.
                    <br>
                </p>
                <h2>
                    S.M.A.R.T
                </h2>
                <div>
                    <p>
                        Industriestandard zur Überwachung von Festplatten u. SSDs.
                    </p>
                </div>
            </div>
            <div>
                <h2>
                    Journaling Filesystem
                </h2>
                <p>

                </p>
            </div>
        </main>
    </div>
</template>

<style scoped>
main {
    background-color: #0f772e6c;
}

.info {
    background-color: #f0f0f038;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
}
main {
    padding: 10px;
}
p:hover,
i:hover,
h2:hover {
    color: white;
}
</style>
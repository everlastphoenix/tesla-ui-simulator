
export const descriptions: Record<string, string> = {
  // Autopilot
  "Sistema di Autosterzatura (Beta)": "Funzione di supporto che mantiene velocità, distanza dal veicolo antistante e il veicolo nella sua corsia. L'attivazione richiede la conferma.",
  "Navigare con Autopilot (Beta)": "Si basa sull'Autosterzatura, suggerisce e cambia automaticamente corsia in autostrada (richiede conferma del conducente per i cambi di corsia di corsia basati sulla velocità e sul percorso).",
  "Controllo dei semafori e degli stop": "Rallenta e arresta il veicolo in presenza di semafori e stop quando l'Autopilot è attivo. Richiede la conferma del conducente (premendo brevemente l'acceleratore) per proseguire, anche con semaforo verde.",
  "Velocità impostata": "Sceglie se l'Autopilot si attiva al Limite di velocità rilevato o alla Velocità attuale di guida.",
  "Sistema prevenzione uscita di corsia": "Controlla come il veicolo interviene se si avvicina o oltrepassa l'estremità della corsia (attivo tra 64 e 145 km/h).",
  "Tipo di Intervento Lane Assist": "Avvertenza: Il volante vibra se le ruote anteriori passano su una linea. Assistenza: Esegue una sterzata correttiva per mantenere il veicolo in sicurezza.",
  "Sistema di avvertimento di collisione frontale": "Regola la sensibilità dell'avviso visivo/acustico. Livelli: Ritardato, Intermedio (predefinito), Anticipato.",
  "Frenata Automatica d'Emergenza": "Se abilitata (è attiva di default), aziona automaticamente i freni se una collisione è ritenuta imminente. Può essere disattivata per il viaggio corrente.",
  "Accelerazione con Rilevamento ostacoli": "Riduco la coppia/applica i freni se rileva un oggetto nel percorso a bassa velocità (sotto 16 km/h).",
  "ASS (Actually Smart Summon)": "Attivazione della funzione Richiamo automatico e Di fatto Smart Summon (Beta).",
  "Autopark": "Abilitazione del sistema che parcheggia in parallelo o perpendicolare (richiede l'attivazione del Sistema di autosterzatura).",

  // Ricarica
  "Distanza di guida / Impostare limite": "Visualizza l'autonomia stimata o la percentuale; regola il cursore per il limite di ricarica desiderato (questo limite si applica anche alle sessioni programmate).",
  "Sportello di ricarica aperto/chiuso": "Comandi manuali per lo sportello della presa.",
  "Corrente di carica in questa posizione": "Permette di regolare la corrente in base al caricabatterie collegato. Il veicolo memorizza l'impostazione per quella specifica postazione.",
  "Programma (Ricarica e Precondizionamento Pianificati)": "Consente di impostare un orario ricorrente per: Precondizionamento: pre-riscalda abitacolo e batteria per l'orario di partenza stabilito, aumentando l'efficienza. Ricarica Pianificata: imposta l'orario di inizio (Avvia a) o fine (Termina entro) ricarica. Utile per tariffe energetiche non di punta. Le impostazioni sono salvate per la posizione (Casa, Lavoro, o Posizione corrente).",
  "Carica con energia fotovoltaica": "(Se disponibile nella regione) Permette di ricaricare il veicolo utilizzando l'energia solare in eccesso prodotta dall'impianto fotovoltaico (richiede Powerwall e configurazione app mobile).",
  "Tenere accesa l'alimentazione accessori": "Se abilitata, mantiene alimentati i dispositivi quando nessuno è a bordo del veicolo, aumentando il consumo energetico.",

  // Dinamica
  "Accelerazione": "Imposta la potenza di accelerazione. Opzioni: Soft (guida fluida), Standard (normale). Sulla versione Performance è disponibile l'opzione Insane.",
  "Peso sterzo": "Regola la sensibilità dello sterzo. Opzioni: Leggero, Standard (ottimale), Pesante (per velocità elevate).",
  "Guida e controllo": "(Solo veicoli Performance) Regola il sistema di sospensioni in tempo reale. Opzioni: Standard (fluido/controllato) e Sport (assetto più rigido/maggiore aderenza).",
  "Modalità Track": "Abilita impostazioni specifiche per la guida in pista (disattivata all'avviamento). Include Impostazioni Modalità Track per personalizzare assistenza stabilità, frenata rigenerativa e raffreddamento post-guida.",
  "Modalità rimorchio": "Deve essere attivata quando si traina un rimorchio; adatta le prestazioni e l'Autopilot (può essere attivata o disattivata manualmente).",
  "Marcia auto (Beta)": "Permette al veicolo di selezionare automaticamente D o R in base all'ambiente circostante. Include l'opzione In uscita da parcheggio.",
  "Partenza con scarsa aderenza": "Consente lo slittamento controllato delle ruote in caso di neve, ghiaccio o fango.",

  // Sicurezza
  "Modalità sentinella": "Attiva il monitoraggio del veicolo da parte delle telecamere quando parcheggiato. Può essere esclusa per Abitazione, Lavoro o Preferiti.",
  "Modalità Valet": "Limita l'accelerazione, la velocità (sotto 113 km/h) e blocca vano bagagli anteriore e portaoggetti; è un profilo conducente integrato.",
  "PIN per guidare": "Richiede l'inserimento di un PIN a 4 cifre per poter guidare il veicolo (Disabilitato se Modalità Valet è attiva).",
  "PIN porta oggetti": "Protegge l'apertura del vano portaoggetti con un codice (il vano portaoggetti si blocca automaticamente se attiva la Modalità Valet, se il veicolo è bloccato da app mobile o da chiave).",
  "Modalità Limite di velocità": "Limita la velocità massima (tra 80 e 193 km/h) e l'accelerazione (impostata su Soft); richiede un PIN.",
  "Joe Mode": "Riduce il volume dei segnali acustici non critici per la sicurezza.",
  "Inclinazione/Intrusione": "Attiva l'allarme se rileva movimento interno o inclinazione del veicolo (se in dotazione).",
  "Spegnimento": "Spegne il veicolo quando non in movimento.",

  // Display
  "Aspetto": "Imposta il display su Scuro, Chiaro o Auto (cambia in base alla luce ambientale).",
  "Lingua touchscreen": "Seleziona la lingua del touchscreen (richiede che il veicolo sia in marcia di stazionamento).",
  "Lingua per comandi vocali": "Sceglie la lingua per il riconoscimento dei comandi vocali.",
  "Lingua per navigazione vocale": "Sceglie la lingua delle istruzioni vocali di navigazione (per alcune lingue è richiesto il download tramite Wi-Fi).",
  "Funzione della rotellina": "Personalizza la funzione attivata dalla pressione prolungata della rotellina sinistra sul volante.",
  "Telecamera per punto cieco automatica": "Attiva/disattiva la visualizzazione automatica della telecamera laterale quando si aziona l'indicatore di direzione.",
  "Visualizzazione energia": "Sceglie se visualizzare l'autonomia stimata in percentuale di energia residua o in chilometri/distanza percorribile.",
  "Dimensioni Testo": "Opzioni Standard o Grande.",
  "Pulizia schermo": "Oscura e disattiva temporaneamente il touchscreen per consentirne la pulizia.",
  "Pressione pneumatici": "Sceglie l'unità di misura: Bar o PSI.",
  "Riduci luce blu": "Regola il display per utilizzare colori più caldi di notte.",

  // Navigazione
  "Pianificatore viaggio": "Abilita l'aggiunta automatica di soste Supercharger lungo un percorso di navigazione per minimizzare il tempo totale di guida e ricarica.",
  "Calcolo percorso in tempo reale": "Ricalcola automaticamente i percorsi per evitare il traffico intenso (richiede Premium Connectivity).",
  "Navigazione automatica": "Prevede automaticamente una destinazione (Casa/Lavoro o evento del calendario) quando si entra nel veicolo.",
  "Guida alla navigazione (Volume)": "Imposta il volume delle istruzioni vocali di navigazione; può essere azzerato toccando l'icona dell'altoparlante.",
  "Evita traghetti / Evita pedaggi": "Ricalcola automaticamente il percorso per escludere traghetti o strade a pedaggio.",
  "Stazioni di ricarica di terze parti": "Abilita la visualizzazione delle stazioni di ricarica non-Tesla sulla mappa.",
  "Segnale acustico autovelox": "Attiva un segnale acustico quando ci si avvicina a un autovelox.",

  // Assistenza
  "Manutenzione": "Visualizza il Riepilogo della manutenzione (stato attuale degli interventi regolari) e permette di azzerare la voce al completamento.",
  "Ruote e pneumatici": "Consente di configurare le Ruote (cambiando l'aspetto sull'avatar) e gli Pneumatici (se All Season, Estivi, Invernali, e per ripristinare le impostazioni apprese).",
  "Traino": "Attiva la Modalità traino per mantenere il freno di stazionamento disinnestato (necessaria per il trasporto su carro attrezzi).",
  "Modalità autolavaggio": "Chiude i finestrini, blocca lo sportello di ricarica e disattiva Modalità Sentinella e blocco portiere dopo allontanamento. Include Metti in ruota libera per autolavaggi automatici.",
  "Calibraz. sedile, sterzo e specchietti": "Utile se la regolazione è limitata o se il profilo non regola automaticamente le posizioni.",
  "Regola fari anteriori": "Permette di regolare l'angolo di illuminazione dei fari (Tesla consiglia di non farlo autonomamente).",
  "Ripristino fabbrica": "Cancella tutti i dati personali e ripristina le impostazioni di fabbrica (richiede credenziali Tesla).",
  "Manuale d'uso": "Fornisce l'accesso al manuale digitale sul touchscreen."
};

/*
allIrregularVerbs-div.js
========================
By AHJ
*/

"use strict"

function displayAllIrregularVerb() {

	document.getElementById('contentRow').innerHTML = '';

	let arrayVerb = [{'Infinitive' : 'abide', 'Simple past' : 'abode', 'Past participe' : 'abode', 'Translation Fr' : 'respecter / se conformer à'},
					{'Infinitive' : 'arise','Simple past' : 'arose','Past participe' : 'arisen', 'Translation Fr' : 'survenir'},
					{'Infinitive' : 'awake', 'Simple past' : 'awoke',	'Past participe' : 'awoken', 'Translation Fr' : 'se réveiller'},
					{'Infinitive' : 'be', 'Simple past' : 'was / where', 'Past participe' : 'been', 'Translation Fr' : 'être'},
					{'Infinitive' : 'bear', 'Simple past' : 'bore', 'Past participe' : 'borne / born', 'Translation Fr' : 'porter / supporter / naître'},
					{'Infinitive' : 'beat','Simple past' : 'beat','Past participe' : 'beaten', 'Translation Fr' : 'battre'},
					{'Infinitive' : 'become', 'Simple past' : 'become', 'Past participe' : 'became', 'Translation Fr' : 'devenir'},
					{'Infinitive' : 'beget', 'Simple past' : 'begat / begot', 'Past participe' : 'begotten', 'Translation Fr' : 'engendrer'},
					{'Infinitive' : 'begin', 'Simple past' : 'began', 'Past participe' : 'begun', 'Translation Fr' : 'commencer'},
					{'Infinitive' : 'bend', 'Simple past' : 'bent', 'Past participe' : 'bent', 'Translation Fr' : 'plier / se courber'},
					{'Infinitive' : 'bet', 'Simple past' : 'bet', 'Past participe' : 'bet', 'Translation Fr' : 'parier'},
					{'Infinitive' : 'bid', 'Simple past' : 'bid / bad', 'Past participe' : 'bid / bidden', 'Translation Fr' : 'offrir'},
					{'Infinitive' : 'bite', 'Simple past' : 'bite', 'Past participe' : 'bitten', 'Translation Fr' : 'mordre'},
					{'Infinitive' : 'bleed', 'Simple past' : 'bled', 'Past participe' : 'bled', 'Translation Fr' : 'saigner'},
					{'Infinitive' : 'blow', 'Simple past' : 'blew', 'Past participe' : 'blown', 'Translation Fr' : 'souffler / gonfler'},
					{'Infinitive' : 'break', 'Simple past' : 'broke', 'Past participe' : 'broken', 'Translation Fr' : 'casser'},
					{'Infinitive' : 'bring', 'Simple past' : 'brought', 'Past participe' : 'brought', 'Translation Fr' : 'apporter'},
					{'Infinitive' : 'broadcast', 'Simple past' : 'broadcast', 'Past participe' : 'broadcast', 'Translation Fr' : 'diffuser / émettre'},
					{'Infinitive' : 'build', 'Simple past' : 'built', 'Past participe' : 'built', 'Translation Fr' : 'construire'},
					{'Infinitive' : 'burn', 'Simple past' : 'burnt / burned', 'Past participe' : 'burnt / burned', 'Translation Fr' : 'brûler'},
					{'Infinitive' : 'burst', 'Simple past' : 'burst', 'Past participe' : 'burst', 'Translation Fr' : 'éclater'},
					{'Infinitive' : 'buy', 'Simple past' : 'bought', 'Past participe' : 'bought', 'Translation Fr' : 'acheter'},
					{'Infinitive' : 'can', 'Simple past' : 'could', 'Past participe' : 'could', 'Translation Fr' : 'pouvoir'},
					{'Infinitive' : 'cast', 'Simple past' : 'cast', 'Past participe' : 'cast', 'Translation Fr' : 'jeter / distribuer (rôles)'},
					{'Infinitive' : 'catch', 'Simple past' : 'caught', 'Past participe' : 'caught', 'Translation Fr' : 'attraper'},
					{'Infinitive' : 'chide', 'Simple past' : 'chid / chode', 'Past participe' : 'chid / chidden', 'Translation Fr' : 'gronder'},
					{'Infinitive' : 'choose', 'Simple past' : 'chose', 'Past participe' : 'chosen', 'Translation Fr' : 'choisir'},
					{'Infinitive' : 'cling', 'Simple past' : 'clung', 'Past participe' : 'clung', 'Translation Fr' : 's\'accrocher'},
					{'Infinitive' : 'clothe', 'Simple past' : 'clad / clothed', 'Past participe' : 'clad / clothed', 'Translation Fr' : 'habiller / recouvrir'},
					{'Infinitive' : 'come', 'Simple past' : 'came', 'Past participe' : 'come', 'Translation Fr' : 'venir'},
					{'Infinitive' : 'cost', 'Simple past' : 'cost', 'Past participe' : 'cost', 'Translation Fr' : 'coûter'},
					{'Infinitive' : 'creep', 'Simple past' : 'crept', 'Past participe' : 'crept', 'Translation Fr' : 'ramper'},
					{'Infinitive' : 'cut', 'Simple past' : 'cut', 'Past participe' : 'cut', 'Translation Fr' : 'couper'},
					{'Infinitive' : 'deal', 'Simple past' : 'deal', 'Past participe' : 'deal', 'Translation Fr' : 'distribuer'},
					{'Infinitive' : 'dig', 'Simple past' : 'dug', 'Past participe' : 'dug', 'Translation Fr' : 'creuser'},
					{'Infinitive' : 'dive', 'Simple past' : 'dived', 'Past participe' : 'dived / dove', 'Translation Fr' : 'plonger'},
					{'Infinitive' : 'do', 'Simple past' : 'did', 'Past participe' : 'done', 'Translation Fr' : 'faire'},
					{'Infinitive' : 'draw', 'Simple past' : 'drew', 'Past participe' : 'drawn', 'Translation Fr' : 'dessiner / tirer'},
					{'Infinitive' : 'dream', 'Simple past' : 'dramt / dreamed', 'Past participe' : 'dramt / dreamed', 'Translation Fr' : 'rêver'},
					{'Infinitive' : 'drink', 'Simple past' : 'drank', 'Past participe' : 'drunk', 'Translation Fr' : 'boire'},
					{'Infinitive' : 'drive', 'Simple past' : 'drove', 'Past participe' : 'driven', 'Translation Fr' : 'conduire'},
					{'Infinitive' : 'dwell', 'Simple past' : 'dwelt', 'Past participe' : 'dwelt / dwelled', 'Translation Fr' : 'habiter'},
					{'Infinitive' : 'eat', 'Simple past' : 'ate', 'Past participe' : 'eaten', 'Translation Fr' : 'manger'},
					{'Infinitive' : 'fall', 'Simple past' : 'fell', 'Past participe' : 'fallen', 'Translation Fr' : 'tomber'},
					{'Infinitive' : 'feed', 'Simple past' : 'fed', 'Past participe' : 'fed', 'Translation Fr' : 'nourrir'},
					{'Infinitive' : 'feel', 'Simple past' : 'felt', 'Past participe' : 'felt', 'Translation Fr' : 'se sentir / ressentir'},
					{'Infinitive' : 'fight', 'Simple past' : 'fought', 'Past participe' : 'fought', 'Translation Fr' : 'se battre'},
					{'Infinitive' : 'find', 'Simple past' : 'found', 'Past participe' : 'found', 'Translation Fr' : 'trouver'},
					{'Infinitive' : 'flee', 'Simple past' : 'fled', 'Past participe' : 'fled', 'Translation Fr' : 's\'enfuir'},
					{'Infinitive' : 'fling', 'Simple past' : 'flung', 'Past participe' : 'flung', 'Translation Fr' : 'lancer'},
					{'Infinitive' : 'fly', 'Simple past' : 'flew', 'Past participe' : 'flown', 'Translation Fr' : 'voler'},
					{'Infinitive' : 'forbid', 'Simple past' : 'forbade', 'Past participe' : 'forbidden', 'Translation Fr' : 'interdire'},
					{'Infinitive' : 'forecast', 'Simple past' : 'forecast', 'Past participe' : 'forecast', 'Translation Fr' : 'prévoir'},
					{'Infinitive' : 'foresee', 'Simple past' : 'foresaw', 'Past participe' : 'foreseen', 'Translation Fr' : 'prévoir / presentir'},
					{'Infinitive' : 'forget', 'Simple past' : 'forgot', 'Past participe' : 'forgotten / forgot', 'Translation Fr' : 'oublier'},
					{'Infinitive' : 'forgive', 'Simple past' : 'forgave', 'Past participe' : 'forgiven', 'Translation Fr' : 'pardonner'},
					{'Infinitive' : 'forsake', 'Simple past' : 'foresook', 'Past participe' : 'forsaken', 'Translation Fr' : 'abandonner'},
					{'Infinitive' : 'freeze', 'Simple past' : 'froze', 'Past participe' : 'frozen', 'Translation Fr' : 'geler'},
					{'Infinitive' : 'get', 'Simple past' : 'got', 'Past participe' : 'gotten / got', 'Translation Fr' : 'obtenir'},
					{'Infinitive' : 'give',	'Simple past' : 'gave', 'Past participe' : 'given', 'Translation Fr' : 'donner'},
					{'Infinitive' : 'go', 'Simple past' : 'went', 'Past participe' : 'gone', 'Translation Fr' : 'aller'},
					{'Infinitive' : 'grind', 'Simple past' : 'ground', 'Past participe' : 'ground', 'Translation Fr' : 'moudre / opprimer'},
					{'Infinitive' : 'grow', 'Simple past' : 'grew', 'Past participe' : 'grown', 'Translation Fr' : 'grandir / pousser'},
					{'Infinitive' : 'hang', 'Simple past' : 'hung', 'Past participe' : 'hung', 'Translation Fr' : 'tenir / pendre'},
					{'Infinitive' : 'have', 'Simple past' : 'had', 'Past participe' : 'had', 'Translation Fr' : 'avoir'},
					{'Infinitive' : 'hear', 'Simple past' : 'heard', 'Past participe' : 'heard', 'Translation Fr' : 'entendre'},
					{'Infinitive' : 'hide', 'Simple past' : 'hid', 'Past participe' : 'hidden', 'Translation Fr' : 'cacher'},
					{'Infinitive' : 'hit', 'Simple past' : 'hit', 'Past participe' : 'hit', 'Translation Fr' : 'taper / appuyer'},
					{'Infinitive' : 'hold', 'Simple past' : 'held', 'Past participe' : 'held', 'Translation Fr' : 'tenir'},
					{'Infinitive' : 'hurt', 'Simple past' : 'hurt', 'Past participe' : 'hurt', 'Translation Fr' : 'blesser'},
					{'Infinitive' : 'keep', 'Simple past' : 'kept', 'Past participe' : 'kept', 'Translation Fr' : 'garder'},
					{'Infinitive' : 'kneel', 'Simple past' : 'knelt / kneeled', 'Past participe' : 'knelt / kneeled', 'Translation Fr' : 's\'agenouiller'},
					{'Infinitive' : 'know', 'Simple past' : 'knew', 'Past participe' : 'known', 'Translation Fr' : 'connaître / savoir'},
					{'Infinitive' : 'lay', 'Simple past' : 'laid', 'Past participe' : 'laid', 'Translation Fr' : 'poser'},
					{'Infinitive' : 'lead', 'Simple past' : 'led', 'Past participe' : 'led', 'Translation Fr' : 'mener / guider'},
					{'Infinitive' : 'lean', 'Simple past' : 'leant / leaned', 'Past participe' : 'leant / leaned', 'Translation Fr' : 's\'incliner / se pencher'},
					{'Infinitive' : 'leap', 'Simple past' : 'leapt / leaped', 'Past participe' : 'leapt / leaped', 'Translation Fr' : 'sauter / bondir'},
					{'Infinitive' : 'learn', 'Simple past' : 'learnt', 'Past participe' : 'learnt', 'Translation Fr' : 'apprendre'},
					{'Infinitive' : 'leave', 'Simple past' : 'left', 'Past participe' : 'left', 'Translation Fr' : 'laisser / quitter / partir'},
					{'Infinitive' : 'lend', 'Simple past' : 'lent', 'Past participe' : 'lent', 'Translation Fr' : 'prêter'},
					{'Infinitive' : 'let', 'Simple past' : 'let', 'Past participe' : 'let', 'Translation Fr' : 'permettre / louer'},
					{'Infinitive' : 'lie', 'Simple past' : 'lay', 'Past participe' : 'lain', 'Translation Fr' : 's\'allonger'},
					{'Infinitive' : 'light', 'Simple past' : 'lit / lighted', 'Past participe' : 'lit / lighted', 'Translation Fr' : 'allumer'},
					{'Infinitive' : 'lose', 'Simple past' : 'lost', 'Past participe' : 'lost', 'Translation Fr' : 'perdre'},
					{'Infinitive' : 'make', 'Simple past' : 'made', 'Past participe' : 'made', 'Translation Fr' : 'fabriquer'},
					{'Infinitive' : 'mean', 'Simple past' : 'mean', 'Past participe' : 'mean', 'Translation Fr' : 'signifier'},
					{'Infinitive' : 'meet', 'Simple past' : 'met', 'Past participe' : 'met', 'Translation Fr' : 'rencontrer'},
					{'Infinitive' : 'mow', 'Simple past' : 'mowed', 'Past participe' : 'mowed / mown', 'Translation Fr' : 'tondre'},
					{'Infinitive' : 'ofset', 'Simple past' : 'ofset', 'Past participe' : 'ofset', 'Translation Fr' : 'compenser'},
					{'Infinitive' : 'overcome', 'Simple past' : 'overcame', 'Past participe' : 'overcome', 'Translation Fr' : 'surmonter'},
					{'Infinitive' : 'partake', 'Simple past' : 'partook', 'Past participe' : 'partaken', 'Translation Fr' : 'prendre part à'},
					{'Infinitive' : 'pay', 'Simple past' : 'paid', 'Past participe' : 'paid', 'Translation Fr' : 'payer'},
					{'Infinitive' : 'plead', 'Simple past' : 'pled / pleaded', 'Past participe' : 'pled / pleaded', 'Translation Fr' : 'supplier / plaider'},
					{'Infinitive' : 'preset', 'Simple past' : 'preset', 'Past participe' : 'preset', 'Translation Fr' : 'programmer'},
					{'Infinitive' : 'prove', 'Simple past' : 'proved', 'Past participe' : 'proven / proved', 'Translation Fr' : 'prouver'},
					{'Infinitive' : 'put', 'Simple past' : 'put', 'Past participe' : 'put', 'Translation Fr' : 'mettre'},
					{'Infinitive' : 'quit', 'Simple past' : 'quit', 'Past participe' : 'quit', 'Translation Fr' : 'quitter'},
					{'Infinitive' : 'read', 'Simple past' : 'read', 'Past participe' : 'read', 'Translation Fr' : 'lire'},
					{'Infinitive' : 'relay', 'Simple past' : 'relaid', 'Past participe' : 'relaid', 'Translation Fr' : 'relayer'},
					{'Infinitive' : 'rend', 'Simple past' : 'rent', 'Past participe' : 'rent', 'Translation Fr' : 'déchirer'},
					{'Infinitive' : 'rid', 'Simple past' : 'rid', 'Past participe' : 'rid', 'Translation Fr' : 'débarrasser'},
					{'Infinitive' : 'ring', 'Simple past' : 'rang', 'Past participe' : 'rung', 'Translation Fr' : 'sonner / téléphoner'},
					{'Infinitive' : 'rise', 'Simple past' : 'rose', 'Past participe' : 'risen', 'Translation Fr' : 'lever'},
					{'Infinitive' : 'run', 'Simple past' : 'ran', 'Past participe' : 'run', 'Translation Fr' : 'courir'},
					{'Infinitive' : 'saw', 'Simple past' : 'saw / sawed', 'Past participe' : 'sawn / sawed', 'Translation Fr' : 'scier'},
					{'Infinitive' : 'say', 'Simple past' : 'said', 'Past participe' : 'said', 'Translation Fr' : 'dire'},
					{'Infinitive' : 'see', 'Simple past' : 'saw', 'Past participe' : 'seen', 'Translation Fr' : 'voir'},
					{'Infinitive' : 'seek', 'Simple past' : 'sought', 'Past participe' : 'sought', 'Translation Fr' : 'chercher'},
					{'Infinitive' : 'sell', 'Simple past' : 'sold', 'Past participe' : 'sold', 'Translation Fr' : 'vendre'},
					{'Infinitive' : 'send', 'Simple past' : 'sent', 'Past participe' : 'sent', 'Translation Fr' : 'envoyer'},
					{'Infinitive' : 'set', 'Simple past' : 'set', 'Past participe' : 'set', 'Translation Fr' : 'fixer'},
					{'Infinitive' : 'shake', 'Simple past' : 'shook', 'Past participe' : 'shaken', 'Translation Fr' : 'secouer'},
					{'Infinitive' : 'shed', 'Simple past' : 'shed', 'Past participe' : 'shed', 'Translation Fr' : 'répandre / laisser tomber'},
					{'Infinitive' : 'shine', 'Simple past' : 'shone', 'Past participe' : 'shone', 'Translation Fr' : 'briller'},
					{'Infinitive' : 'shoe', 'Simple past' : 'shod', 'Past participe' : 'shod', 'Translation Fr' : 'chausser'},
					{'Infinitive' : 'shoot', 'Simple past' : 'shot', 'Past participe' : 'shot', 'Translation Fr' : 'tirer / fusiller'},
					{'Infinitive' : 'show', 'Simple past' : 'showed', 'Past participe' : 'shown', 'Translation Fr' : 'montrer'},
					{'Infinitive' : 'shut', 'Simple past' : 'shut', 'Past participe' : 'shut', 'Translation Fr' : 'fermer'},
					{'Infinitive' : 'sing', 'Simple past' : 'sang', 'Past participe' : 'sung', 'Translation Fr' : 'chanter'},
					{'Infinitive' : 'sink', 'Simple past' : 'sank / sunk', 'Past participe' : 'sunk / sunken', 'Translation Fr' : 'couler'},
					{'Infinitive' : 'sit', 'Simple past' : 'sat', 'Past participe' : 'sat', 'Translation Fr' : 's\'asseoir'},
					{'Infinitive' : 'slay', 'Simple past' : 'slew', 'Past participe' : 'slain', 'Translation Fr' : 'tuer'},
					{'Infinitive' : 'sleep', 'Simple past' : 'slept', 'Past participe' : 'slept', 'Translation Fr' : 'dormir'},
					{'Infinitive' : 'slide', 'Simple past' : 'slid', 'Past participe' : 'slid', 'Translation Fr' : 'glisser'},
					{'Infinitive' : 'slit', 'Simple past' : 'slit', 'Past participe' : 'slit', 'Translation Fr' : 'fendre'},
					{'Infinitive' : 'smell', 'Simple past' : 'smelt', 'Past participe' : 'smelt', 'Translation Fr' : 'sentir'},
					{'Infinitive' : 'sow', 'Simple past' : 'sowed', 'Past participe' : 'sown / sowed', 'Translation Fr' : 'semer'},
					{'Infinitive' : 'speak', 'Simple past' : 'spoke', 'Past participe' : 'spoken', 'Translation Fr' : 'parler'},
					{'Infinitive' : 'speed', 'Simple past' : 'sped', 'Past participe' : 'sped', 'Translation Fr' : 'aller vite'},
					{'Infinitive' : 'spell', 'Simple past' : 'spelt', 'Past participe' : 'spelt', 'Translation Fr' : 'épeler / orthographier'},
					{'Infinitive' : 'spend', 'Simple past' : 'spent', 'Past participe' : 'spent', 'Translation Fr' : 'dépenser / passer du temps'},
					{'Infinitive' : 'spill', 'Simple past' : 'spilt / spilled', 'Past participe' : 'spilt / spilled', 'Translation Fr' : 'renverser'},
					{'Infinitive' : 'spin', 'Simple past' : 'spun', 'Past participe' : 'spun', 'Translation Fr' : 'tourner / faire tourner'},
					{'Infinitive' : 'spit', 'Simple past' : 'spat / spit', 'Past participe' : 'spat / spit', 'Translation Fr' : 'cracher'},
					{'Infinitive' : 'split', 'Simple past' : 'split', 'Past participe' : 'split', 'Translation Fr' : 'fendre'},
					{'Infinitive' : 'spoil', 'Simple past' : 'spoilt', 'Past participe' : 'spoilt', 'Translation Fr' : 'gâcher / gâter'},
					{'Infinitive' : 'spread', 'Simple past' : 'spread', 'Past participe' : 'spread', 'Translation Fr' : 'répandre'},
					{'Infinitive' : 'spring', 'Simple past' : 'sprang', 'Past participe' : 'sprung', 'Translation Fr' : 'surgir / jaillir / bondir'},
					{'Infinitive' : 'stand', 'Simple past' : 'stood', 'Past participe' : 'stood', 'Translation Fr' : 'être debout'},
					{'Infinitive' : 'steal', 'Simple past' : 'stole', 'Past participe' : 'stolen', 'Translation Fr' : 'voler / dérober'},
					{'Infinitive' : 'stick', 'Simple past' : 'stuck', 'Past participe' : 'stuck', 'Translation Fr' : 'coller'},
					{'Infinitive' : 'sting', 'Simple past' : 'stung', 'Past participe' : 'stung', 'Translation Fr' : 'piquer'},
					{'Infinitive' : 'stink', 'Simple past' : 'stank', 'Past participe' : 'stunk', 'Translation Fr' : 'puer'},
					{'Infinitive' : 'strew', 'Simple past' : 'strewed', 'Past participe' : 'strewn / strewed', 'Translation Fr' : 'éparpiller'},
					{'Infinitive' : 'strike', 'Simple past' : 'struck', 'Past participe' : 'stricken / struck', 'Translation Fr' : 'frapper'},
					{'Infinitive' : 'strive', 'Simple past' : 'strove', 'Past participe' : 'striven', 'Translation Fr' : 's\'efforcer'},
					{'Infinitive' : 'swear', 'Simple past' : 'swore', 'Past participe' : 'sworn', 'Translation Fr' : 'jurer'},
					{'Infinitive' : 'sweat', 'Simple past' : 'sweat / sweated', 'Past participe' : 'sweat / sweated', 'Translation Fr' : 'suer'},
					{'Infinitive' : 'sweep', 'Simple past' : 'swept', 'Past participe' : 'swept', 'Translation Fr' : 'balayer'},
					{'Infinitive' : 'swell', 'Simple past' : 'swelled / sweated', 'Past participe' : 'swollen', 'Translation Fr' : 'gonfler / enfler'},
					{'Infinitive' : 'swim', 'Simple past' : 'swam', 'Past participe' : 'swum', 'Translation Fr' : 'nager'},
					{'Infinitive' : 'swing', 'Simple past' : 'swung', 'Past participe' : 'swung', 'Translation Fr' : 'se balancer'},
					{'Infinitive' : 'take', 'Simple past' : 'took', 'Past participe' : 'taken', 'Translation Fr' : 'prendre'},
					{'Infinitive' : 'teach', 'Simple past' : 'taught', 'Past participe' : 'taught', 'Translation Fr' : 'enseigner'},
					{'Infinitive' : 'tear', 'Simple past' : 'tore', 'Past participe' : 'torn', 'Translation Fr' : 'déchirer'},
					{'Infinitive' : 'tell', 'Simple past' : 'told', 'Past participe' : 'told', 'Translation Fr' : 'dire / raconte'},
					{'Infinitive' : 'think ', 'Simple past' : 'tought', 'Past participe' : 'tought', 'Translation Fr' : 'penser'},
					{'Infinitive' : 'thrive', 'Simple past' : 'throve / thrived', 'Past participe' : 'thriven / thrived', 'Translation Fr' : 'prospérer'},
					{'Infinitive' : 'throve', 'Simple past' : 'threw', 'Past participe' : 'thrown', 'Translation Fr' : 'jeter'},
					{'Infinitive' : 'thrust', 'Simple past' : 'thrust', 'Past participe' : 'thrust', 'Translation Fr' : 'enfoncer'},
					{'Infinitive' : 'typeset', 'Simple past' : 'typeset', 'Past participe' : 'typeset', 'Translation Fr' : 'composer'},
					{'Infinitive' : 'undergo', 'Simple past' : 'underwent', 'Past participe' : 'undergone', 'Translation Fr' : 'subir'},
					{'Infinitive' : 'understand', 'Simple past' : 'understood', 'Past participe' : 'understood', 'Translation Fr' : 'comprendre'},
					{'Infinitive' : 'wake', 'Simple past' : 'woke', 'Past participe' : 'woken', 'Translation Fr' : 'réveiller'},
					{'Infinitive' : 'wear', 'Simple past' : 'wore', 'Past participe' : 'worn', 'Translation Fr' : 'porter des vêtements'},
					{'Infinitive' : 'weep', 'Simple past' : 'wept', 'Past participe' : 'wept', 'Translation Fr' : 'pleurer'},
					{'Infinitive' : 'wet', 'Simple past' : 'wet / wetted', 'Past participe' : 'wet / wetted', 'Translation Fr' : 'mouiller'},
					{'Infinitive' : 'win', 'Simple past' : 'won', 'Past participe' : 'won', 'Translation Fr' : 'gagner'},
					{'Infinitive' : 'wind', 'Simple past' : 'wond', 'Past participe' : 'wond', 'Translation Fr' : 'enrouler / remonter'},
					{'Infinitive' : 'withdraw', 'Simple past' : 'withdrew', 'Past participe' : 'withdrawn', 'Translation Fr' : 'se retirer'},
					{'Infinitive' : 'wring', 'Simple past' : 'wrung', 'Past participe' : 'wrung', 'Translation Fr' : 'tordre'},
					{'Infinitive' : 'write', 'Simple past' : 'wrote', 'Past participe' : 'written', 'Translation Fr' : 'écrire'}			
					];

	function objectVerb(arrayVerb) {

        for (let i = 0; i < arrayVerb.length; i++) {
            
            let verb = arrayVerb[i]; // Renvoye un objet contenant les éléments d'un verbe.

			/*console.log(verb);*/	
		}
		return arrayVerb;
	}

	let verb = objectVerb(arrayVerb);
/*
console.log(verb.length);
console.log(verb);*/

	function displayRandVerb(verb) {		
		
		for (let i in verb) { // Boucle sur l'objet verb

			const values = Object.values(verb[i]); // Convertit l'objet en array des valeurs

			for (let j = 0; j < values.length; j++) { // Boucle sur l'array

				const element = values[j];		
			}

			document.getElementById('contentRow').innerHTML += 
			'<div id="infinitive">' + values[0] + '</div>' 
			+ '<div id="simplePast">' + values[1] + '</div>' 
			+ '<div id="pastParticipe">' + values[2] + '</div>' 
			+ '<div id="translation">' + values[3] + '</div>';
						
		}
	}
	displayRandVerb(verb);
}


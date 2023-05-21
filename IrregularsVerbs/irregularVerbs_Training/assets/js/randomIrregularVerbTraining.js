/*
randomIrregularVerb.js
===========
By AHJ
*/

"use strict"
	
document.getElementById('infinitive').innerHTML = ''; // Vide la div#infinitive.

// Array des verbes irréguliers.
let arrayVerb = [
					{'Infinitive' : 'abide', 'simplePast' : 'abode', 'pastParticipe' : 'abode', 'TranslationFr' : 'respecter / se conformer à'},
					{'Infinitive' : 'arise','simplePast' : 'arose','pastParticipe' : 'arisen', 'TranslationFr' : 'survenir'},
					{'Infinitive' : 'awake', 'simplePast' : 'awoke',	'pastParticipe' : 'awoken', 'TranslationFr' : 'se réveiller'},
					{'Infinitive' : 'be', 'simplePast' : 'was/where', 'pastParticipe' : 'been', 'TranslationFr' : 'être'},
					{'Infinitive' : 'bear', 'simplePast' : 'bore', 'pastParticipe' : 'borne/born', 'TranslationFr' : 'porter / supporter / naître'},
					{'Infinitive' : 'beat','simplePast' : 'beat','pastParticipe' : 'beaten', 'TranslationFr' : 'battre'},
					{'Infinitive' : 'become', 'simplePast' : 'become', 'pastParticipe' : 'became', 'TranslationFr' : 'devenir'},
					{'Infinitive' : 'beget', 'simplePast' : 'begat/begot', 'pastParticipe' : 'begotten', 'TranslationFr' : 'engendrer'},
					{'Infinitive' : 'begin', 'simplePast' : 'began', 'pastParticipe' : 'begun', 'TranslationFr' : 'commencer'},
					{'Infinitive' : 'bend', 'simplePast' : 'bent', 'pastParticipe' : 'bent', 'TranslationFr' : 'plier / se courber'},
					{'Infinitive' : 'bet', 'simplePast' : 'bet', 'pastParticipe' : 'bet', 'TranslationFr' : 'parier'},
					{'Infinitive' : 'bid', 'simplePast' : 'bid/bad', 'pastParticipe' : 'bid/bidden', 'TranslationFr' : 'offrir'},
					{'Infinitive' : 'bite', 'simplePast' : 'bite', 'pastParticipe' : 'bitten', 'TranslationFr' : 'mordre'},
					{'Infinitive' : 'bleed', 'simplePast' : 'bled', 'pastParticipe' : 'bled', 'TranslationFr' : 'saigner'},
					{'Infinitive' : 'blow', 'simplePast' : 'blew', 'pastParticipe' : 'blown', 'TranslationFr' : 'souffler/gonfler'},
					{'Infinitive' : 'break', 'simplePast' : 'broke', 'pastParticipe' : 'broken', 'TranslationFr' : 'casser'},
					{'Infinitive' : 'bring', 'simplePast' : 'brought', 'pastParticipe' : 'brought', 'TranslationFr' : 'apporter'},
					{'Infinitive' : 'broadcast', 'simplePast' : 'broadcast', 'pastParticipe' : 'broadcast', 'TranslationFr' : 'diffuser / émettre'},
					{'Infinitive' : 'build', 'simplePast' : 'built', 'pastParticipe' : 'built', 'TranslationFr' : 'construire'},
					{'Infinitive' : 'burn', 'simplePast' : 'burnt/burned', 'pastParticipe' : 'burnt/burned', 'TranslationFr' : 'brûler'},
					{'Infinitive' : 'burst', 'simplePast' : 'burst', 'pastParticipe' : 'burst', 'TranslationFr' : 'éclater'},
					{'Infinitive' : 'buy', 'simplePast' : 'bought', 'pastParticipe' : 'bought', 'TranslationFr' : 'acheter'},
					{'Infinitive' : 'can', 'simplePast' : 'could', 'pastParticipe' : 'could', 'TranslationFr' : 'pouvoir'},
					{'Infinitive' : 'cast', 'simplePast' : 'cast', 'pastParticipe' : 'cast', 'TranslationFr' : 'jeter / distribuer (rôles)'},
					{'Infinitive' : 'catch', 'simplePast' : 'caught', 'pastParticipe' : 'caught', 'TranslationFr' : 'attraper'},
					{'Infinitive' : 'chide', 'simplePast' : 'chid/chode', 'pastParticipe' : 'chid/chidden', 'TranslationFr' : 'gronder'},
					{'Infinitive' : 'choose', 'simplePast' : 'chose', 'pastParticipe' : 'chosen', 'TranslationFr' : 'choisir'},
					{'Infinitive' : 'cling', 'simplePast' : 'clung', 'pastParticipe' : 'clung', 'TranslationFr' : 's\'accrocher'},
					{'Infinitive' : 'clothe', 'simplePast' : 'clad/clothed', 'pastParticipe' : 'clad/clothed', 'TranslationFr' : 'habiller / recouvrir'},
					{'Infinitive' : 'come', 'simplePast' : 'came', 'pastParticipe' : 'come', 'TranslationFr' : 'venir'},
					{'Infinitive' : 'cost', 'simplePast' : 'cost', 'pastParticipe' : 'cost', 'TranslationFr' : 'coûter'},
					{'Infinitive' : 'creep', 'simplePast' : 'crept', 'pastParticipe' : 'crept', 'TranslationFr' : 'ramper'},
					{'Infinitive' : 'cut', 'simplePast' : 'cut', 'pastParticipe' : 'cut', 'TranslationFr' : 'couper'},
					{'Infinitive' : 'deal', 'simplePast' : 'deal', 'pastParticipe' : 'deal', 'TranslationFr' : 'distribuer'},
					{'Infinitive' : 'dig', 'simplePast' : 'dug', 'pastParticipe' : 'dug', 'TranslationFr' : 'creuser'},
					{'Infinitive' : 'dive', 'simplePast' : 'dived', 'pastParticipe' : 'dived/dove', 'TranslationFr' : 'plonger'},
					{'Infinitive' : 'do', 'simplePast' : 'did', 'pastParticipe' : 'done', 'TranslationFr' : 'faire'},
					{'Infinitive' : 'draw', 'simplePast' : 'drew', 'pastParticipe' : 'drawn', 'TranslationFr' : 'dessiner / tirer'},
					{'Infinitive' : 'dream', 'simplePast' : 'dramt/dreamed', 'pastParticipe' : 'dramt/dreamed', 'TranslationFr' : 'rêver'},
					{'Infinitive' : 'drink', 'simplePast' : 'drank', 'pastParticipe' : 'drunk', 'TranslationFr' : 'boire'},
					{'Infinitive' : 'drive', 'simplePast' : 'drove', 'pastParticipe' : 'driven', 'TranslationFr' : 'conduire'},
					{'Infinitive' : 'dwell', 'simplePast' : 'dwelt', 'pastParticipe' : 'dwelt/dwelled', 'TranslationFr' : 'habiter'},
					{'Infinitive' : 'eat', 'simplePast' : 'ate', 'pastParticipe' : 'eaten', 'TranslationFr' : 'manger'},
					{'Infinitive' : 'fall', 'simplePast' : 'fell', 'pastParticipe' : 'fallen', 'TranslationFr' : 'tomber'},
					{'Infinitive' : 'feed', 'simplePast' : 'fed', 'pastParticipe' : 'fed', 'TranslationFr' : 'nourrir'},
					{'Infinitive' : 'feel', 'simplePast' : 'felt', 'pastParticipe' : 'felt', 'TranslationFr' : 'se sentir / ressentir'},
					{'Infinitive' : 'fight', 'simplePast' : 'fought', 'pastParticipe' : 'fought', 'TranslationFr' : 'se battre'},
					{'Infinitive' : 'find', 'simplePast' : 'found', 'pastParticipe' : 'found', 'TranslationFr' : 'trouver'},
					{'Infinitive' : 'flee', 'simplePast' : 'fled', 'pastParticipe' : 'fled', 'TranslationFr' : 's\'enfuir'},
					{'Infinitive' : 'fling', 'simplePast' : 'flung', 'pastParticipe' : 'flung', 'TranslationFr' : 'lancer'},
					{'Infinitive' : 'fly', 'simplePast' : 'flew', 'pastParticipe' : 'flown', 'TranslationFr' : 'voler'},
					{'Infinitive' : 'forbid', 'simplePast' : 'forbade', 'pastParticipe' : 'forbidden', 'TranslationFr' : 'interdire'},
					{'Infinitive' : 'forecast', 'simplePast' : 'forecast', 'pastParticipe' : 'forecast', 'TranslationFr' : 'prévoir'},
					{'Infinitive' : 'foresee', 'simplePast' : 'foresaw', 'pastParticipe' : 'foreseen', 'TranslationFr' : 'prévoir / presentir'},
					{'Infinitive' : 'forget', 'simplePast' : 'forgot', 'pastParticipe' : 'forgotten/forgot', 'TranslationFr' : 'oublier'},
					{'Infinitive' : 'forgive', 'simplePast' : 'forgave', 'pastParticipe' : 'forgiven', 'TranslationFr' : 'pardonner'},
					{'Infinitive' : 'forsake', 'simplePast' : 'foresook', 'pastParticipe' : 'forsaken', 'TranslationFr' : 'abandonner'},
					{'Infinitive' : 'freeze', 'simplePast' : 'froze', 'pastParticipe' : 'frozen', 'TranslationFr' : 'geler'},
					{'Infinitive' : 'get', 'simplePast' : 'got', 'pastParticipe' : 'gotten/got', 'TranslationFr' : 'obtenir'},
					{'Infinitive' : 'give',	'simplePast' : 'gave', 'pastParticipe' : 'given', 'TranslationFr' : 'donner'},
					{'Infinitive' : 'go', 'simplePast' : 'went', 'pastParticipe' : 'gone', 'TranslationFr' : 'aller'},
					{'Infinitive' : 'grind', 'simplePast' : 'ground', 'pastParticipe' : 'ground', 'TranslationFr' : 'moudre / opprimer'},
					{'Infinitive' : 'grow', 'simplePast' : 'grew', 'pastParticipe' : 'grown', 'TranslationFr' : 'grandir / pousser'},
					{'Infinitive' : 'hang', 'simplePast' : 'hung', 'pastParticipe' : 'hung', 'TranslationFr' : 'tenir / pendre'},
					{'Infinitive' : 'have', 'simplePast' : 'had', 'pastParticipe' : 'had', 'TranslationFr' : 'avoir'},
					{'Infinitive' : 'hear', 'simplePast' : 'heard', 'pastParticipe' : 'heard', 'TranslationFr' : 'entendre'},
					{'Infinitive' : 'hide', 'simplePast' : 'hid', 'pastParticipe' : 'hidden', 'TranslationFr' : 'cacher'},
					{'Infinitive' : 'hit', 'simplePast' : 'hit', 'pastParticipe' : 'hit', 'TranslationFr' : 'taper / appuyer'},
					{'Infinitive' : 'hold', 'simplePast' : 'held', 'pastParticipe' : 'held', 'TranslationFr' : 'tenir'},
					{'Infinitive' : 'hurt', 'simplePast' : 'hurt', 'pastParticipe' : 'hurt', 'TranslationFr' : 'blesser'},
					{'Infinitive' : 'keep', 'simplePast' : 'kept', 'pastParticipe' : 'kept', 'TranslationFr' : 'garder'},
					{'Infinitive' : 'kneel', 'simplePast' : 'knelt/kneeled', 'pastParticipe' : 'knelt/kneeled', 'TranslationFr' : 's\'agenouiller'},
					{'Infinitive' : 'know', 'simplePast' : 'knew', 'pastParticipe' : 'known', 'TranslationFr' : 'connaître / savoir'},
					{'Infinitive' : 'lay', 'simplePast' : 'laid', 'pastParticipe' : 'laid', 'TranslationFr' : 'poser'},
					{'Infinitive' : 'lead', 'simplePast' : 'led', 'pastParticipe' : 'led', 'TranslationFr' : 'mener / guider'},
					{'Infinitive' : 'lean', 'simplePast' : 'leant/leaned', 'pastParticipe' : 'leant/leaned', 'TranslationFr' : 's\'incliner / se pencher'},
					{'Infinitive' : 'leap', 'simplePast' : 'leapt/leaped', 'pastParticipe' : 'leapt/leaped', 'TranslationFr' : 'sauter / bondir'},
					{'Infinitive' : 'learn', 'simplePast' : 'learnt', 'pastParticipe' : 'learnt', 'TranslationFr' : 'apprendre'},
					{'Infinitive' : 'leave', 'simplePast' : 'left', 'pastParticipe' : 'left', 'TranslationFr' : 'laisser / quitter / partir'},
					{'Infinitive' : 'lend', 'simplePast' : 'lent', 'pastParticipe' : 'lent', 'TranslationFr' : 'prêter'},
					{'Infinitive' : 'let', 'simplePast' : 'let', 'pastParticipe' : 'let', 'TranslationFr' : 'permettre / louer'},
					{'Infinitive' : 'lie', 'simplePast' : 'lay', 'pastParticipe' : 'lain', 'TranslationFr' : 's\'allonger'},
					{'Infinitive' : 'light', 'simplePast' : 'lit/lighted', 'pastParticipe' : 'lit/lighted', 'TranslationFr' : 'allumer'},
					{'Infinitive' : 'lose', 'simplePast' : 'lost', 'pastParticipe' : 'lost', 'TranslationFr' : 'perdre'},
					{'Infinitive' : 'make', 'simplePast' : 'made', 'pastParticipe' : 'made', 'TranslationFr' : 'fabriquer'},
					{'Infinitive' : 'mean', 'simplePast' : 'mean', 'pastParticipe' : 'mean', 'TranslationFr' : 'signifier'},
					{'Infinitive' : 'meet', 'simplePast' : 'met', 'pastParticipe' : 'met', 'TranslationFr' : 'rencontrer'},
					{'Infinitive' : 'mow', 'simplePast' : 'mowed', 'pastParticipe' : 'mowed/mown', 'TranslationFr' : 'tondre'},
					{'Infinitive' : 'ofset', 'simplePast' : 'ofset', 'pastParticipe' : 'ofset', 'TranslationFr' : 'compenser'},
					{'Infinitive' : 'overcome', 'simplePast' : 'overcame', 'pastParticipe' : 'overcome', 'TranslationFr' : 'surmonter'},
					{'Infinitive' : 'partake', 'simplePast' : 'partook', 'pastParticipe' : 'partaken', 'TranslationFr' : 'prendre part à'},
					{'Infinitive' : 'pay', 'simplePast' : 'paid', 'pastParticipe' : 'paid', 'TranslationFr' : 'payer'},
					{'Infinitive' : 'plead', 'simplePast' : 'pled/pleaded', 'pastParticipe' : 'pled/pleaded', 'TranslationFr' : 'supplier / plaider'},
					{'Infinitive' : 'preset', 'simplePast' : 'preset', 'pastParticipe' : 'preset', 'TranslationFr' : 'programmer'},
					{'Infinitive' : 'prove', 'simplePast' : 'proved', 'pastParticipe' : 'proven/proved', 'TranslationFr' : 'prouver'},
					{'Infinitive' : 'put', 'simplePast' : 'put', 'pastParticipe' : 'put', 'TranslationFr' : 'mettre'},
					{'Infinitive' : 'quit', 'simplePast' : 'quit', 'pastParticipe' : 'quit', 'TranslationFr' : 'quitter'},
					{'Infinitive' : 'read', 'simplePast' : 'read', 'pastParticipe' : 'read', 'TranslationFr' : 'lire'},
					{'Infinitive' : 'relay', 'simplePast' : 'relaid', 'pastParticipe' : 'relaid', 'TranslationFr' : 'relayer'},
					{'Infinitive' : 'rend', 'simplePast' : 'rent', 'pastParticipe' : 'rent', 'TranslationFr' : 'déchirer'},
					{'Infinitive' : 'rid', 'simplePast' : 'rid', 'pastParticipe' : 'rid', 'TranslationFr' : 'débarrasser'},
					{'Infinitive' : 'ring', 'simplePast' : 'rang', 'pastParticipe' : 'rung', 'TranslationFr' : 'sonner / téléphoner'},
					{'Infinitive' : 'rise', 'simplePast' : 'rose', 'pastParticipe' : 'risen', 'TranslationFr' : 'lever'},
					{'Infinitive' : 'run', 'simplePast' : 'ran', 'pastParticipe' : 'run', 'TranslationFr' : 'courir'},
					{'Infinitive' : 'saw', 'simplePast' : 'saw/sawed', 'pastParticipe' : 'sawn/sawed', 'TranslationFr' : 'scier'},
					{'Infinitive' : 'say', 'simplePast' : 'said', 'pastParticipe' : 'said', 'TranslationFr' : 'dire'},
					{'Infinitive' : 'see', 'simplePast' : 'saw', 'pastParticipe' : 'seen', 'TranslationFr' : 'voir'},
					{'Infinitive' : 'seek', 'simplePast' : 'sought', 'pastParticipe' : 'sought', 'TranslationFr' : 'chercher'},
					{'Infinitive' : 'sell', 'simplePast' : 'sold', 'pastParticipe' : 'sold', 'TranslationFr' : 'vendre'},
					{'Infinitive' : 'send', 'simplePast' : 'sent', 'pastParticipe' : 'sent', 'TranslationFr' : 'envoyer'},
					{'Infinitive' : 'set', 'simplePast' : 'set', 'pastParticipe' : 'set', 'TranslationFr' : 'fixer'},
					{'Infinitive' : 'shake', 'simplePast' : 'shook', 'pastParticipe' : 'shaken', 'TranslationFr' : 'secouer'},
					{'Infinitive' : 'shed', 'simplePast' : 'shed', 'pastParticipe' : 'shed', 'TranslationFr' : 'répandre / laisser tomber'},
					{'Infinitive' : 'shine', 'simplePast' : 'shone', 'pastParticipe' : 'shone', 'TranslationFr' : 'briller'},
					{'Infinitive' : 'shoe', 'simplePast' : 'shod', 'pastParticipe' : 'shod', 'TranslationFr' : 'chausser'},
					{'Infinitive' : 'shoot', 'simplePast' : 'shot', 'pastParticipe' : 'shot', 'TranslationFr' : 'tirer / fusiller'},
					{'Infinitive' : 'show', 'simplePast' : 'showed', 'pastParticipe' : 'shown', 'TranslationFr' : 'montrer'},
					{'Infinitive' : 'shut', 'simplePast' : 'shut', 'pastParticipe' : 'shut', 'TranslationFr' : 'fermer'},
					{'Infinitive' : 'sing', 'simplePast' : 'sang', 'pastParticipe' : 'sung', 'TranslationFr' : 'chanter'},
					{'Infinitive' : 'sink', 'simplePast' : 'sank/sunk', 'pastParticipe' : 'sunk/sunken', 'TranslationFr' : 'couler'},
					{'Infinitive' : 'sit', 'simplePast' : 'sat', 'pastParticipe' : 'sat', 'TranslationFr' : 's\'asseoir'},
					{'Infinitive' : 'slay', 'simplePast' : 'slew', 'pastParticipe' : 'slain', 'TranslationFr' : 'tuer'},
					{'Infinitive' : 'sleep', 'simplePast' : 'slept', 'pastParticipe' : 'slept', 'TranslationFr' : 'dormir'},
					{'Infinitive' : 'slide', 'simplePast' : 'slid', 'pastParticipe' : 'slid', 'TranslationFr' : 'glisser'},
					{'Infinitive' : 'slit', 'simplePast' : 'slit', 'pastParticipe' : 'slit', 'TranslationFr' : 'fendre'},
					{'Infinitive' : 'smell', 'simplePast' : 'smelt', 'pastParticipe' : 'smelt', 'TranslationFr' : 'sentir'},
					{'Infinitive' : 'sow', 'simplePast' : 'sowed', 'pastParticipe' : 'sown/sowed', 'TranslationFr' : 'semer'},
					{'Infinitive' : 'speak', 'simplePast' : 'spoke', 'pastParticipe' : 'spoken', 'TranslationFr' : 'parler'},
					{'Infinitive' : 'speed', 'simplePast' : 'sped', 'pastParticipe' : 'sped', 'TranslationFr' : 'aller vite'},
					{'Infinitive' : 'spell', 'simplePast' : 'spelt', 'pastParticipe' : 'spelt', 'TranslationFr' : 'épeler / orthographier'},
					{'Infinitive' : 'spend', 'simplePast' : 'spent', 'pastParticipe' : 'spent', 'TranslationFr' : 'dépenser / passer du temps'},
					{'Infinitive' : 'spill', 'simplePast' : 'spilt/spilled', 'pastParticipe' : 'spilt/spilled', 'TranslationFr' : 'renverser'},
					{'Infinitive' : 'spin', 'simplePast' : 'spun', 'pastParticipe' : 'spun', 'TranslationFr' : 'tourner / faire tourner'},
					{'Infinitive' : 'spit', 'simplePast' : 'spat/spit', 'pastParticipe' : 'spat/spit', 'TranslationFr' : 'cracher'},
					{'Infinitive' : 'split', 'simplePast' : 'split', 'pastParticipe' : 'split', 'TranslationFr' : 'fendre'},
					{'Infinitive' : 'spoil', 'simplePast' : 'spoilt', 'pastParticipe' : 'spoilt', 'TranslationFr' : 'gâcher / gâter'},
					{'Infinitive' : 'spread', 'simplePast' : 'spread', 'pastParticipe' : 'spread', 'TranslationFr' : 'répandre'},
					{'Infinitive' : 'spring', 'simplePast' : 'sprang', 'pastParticipe' : 'sprung', 'TranslationFr' : 'surgir / jaillir / bondir'},
					{'Infinitive' : 'stand', 'simplePast' : 'stood', 'pastParticipe' : 'stood', 'TranslationFr' : 'être debout'},
					{'Infinitive' : 'steal', 'simplePast' : 'stole', 'pastParticipe' : 'stolen', 'TranslationFr' : 'voler / dérober'},
					{'Infinitive' : 'stick', 'simplePast' : 'stuck', 'pastParticipe' : 'stuck', 'TranslationFr' : 'coller'},
					{'Infinitive' : 'sting', 'simplePast' : 'stung', 'pastParticipe' : 'stung', 'TranslationFr' : 'piquer'},
					{'Infinitive' : 'stink', 'simplePast' : 'stank', 'pastParticipe' : 'stunk', 'TranslationFr' : 'puer'},
					{'Infinitive' : 'strew', 'simplePast' : 'strewed', 'pastParticipe' : 'strewn/strewed', 'TranslationFr' : 'éparpiller'},
					{'Infinitive' : 'strike', 'simplePast' : 'struck', 'pastParticipe' : 'stricken/struck', 'TranslationFr' : 'frapper'},
					{'Infinitive' : 'strive', 'simplePast' : 'strove', 'pastParticipe' : 'striven', 'TranslationFr' : 's\'efforcer'},
					{'Infinitive' : 'swear', 'simplePast' : 'swore', 'pastParticipe' : 'sworn', 'TranslationFr' : 'jurer'},
					{'Infinitive' : 'sweat', 'simplePast' : 'sweat/sweated', 'pastParticipe' : 'sweat/sweated', 'TranslationFr' : 'suer'},
					{'Infinitive' : 'sweep', 'simplePast' : 'swept', 'pastParticipe' : 'swept', 'TranslationFr' : 'balayer'},
					{'Infinitive' : 'swell', 'simplePast' : 'swelled/sweated', 'pastParticipe' : 'swollen', 'TranslationFr' : 'gonfler / enfler'},
					{'Infinitive' : 'swim', 'simplePast' : 'swam', 'pastParticipe' : 'swum', 'TranslationFr' : 'nager'},
					{'Infinitive' : 'swing', 'simplePast' : 'swung', 'pastParticipe' : 'swung', 'TranslationFr' : 'se balancer'},
					{'Infinitive' : 'take', 'simplePast' : 'took', 'pastParticipe' : 'taken', 'TranslationFr' : 'prendre'},
					{'Infinitive' : 'teach', 'simplePast' : 'taught', 'pastParticipe' : 'taught', 'TranslationFr' : 'enseigner'},
					{'Infinitive' : 'tear', 'simplePast' : 'tore', 'pastParticipe' : 'torn', 'TranslationFr' : 'déchirer'},
					{'Infinitive' : 'tell', 'simplePast' : 'told', 'pastParticipe' : 'told', 'TranslationFr' : 'dire / raconte'},
					{'Infinitive' : 'think ', 'simplePast' : 'tought', 'pastParticipe' : 'tought', 'TranslationFr' : 'penser'},
					{'Infinitive' : 'thrive', 'simplePast' : 'throve/thrived', 'pastParticipe' : 'thriven/thrived', 'TranslationFr' : 'prospérer'},
					{'Infinitive' : 'throve', 'simplePast' : 'threw', 'pastParticipe' : 'thrown', 'TranslationFr' : 'jeter'},
					{'Infinitive' : 'thrust', 'simplePast' : 'thrust', 'pastParticipe' : 'thrust', 'TranslationFr' : 'enfoncer'},
					{'Infinitive' : 'typeset', 'simplePast' : 'typeset', 'pastParticipe' : 'typeset', 'TranslationFr' : 'composer'},
					{'Infinitive' : 'undergo', 'simplePast' : 'underwent', 'pastParticipe' : 'undergone', 'TranslationFr' : 'subir'},
					{'Infinitive' : 'understand', 'simplePast' : 'understood', 'pastParticipe' : 'understood', 'TranslationFr' : 'comprendre'},
					{'Infinitive' : 'wake', 'simplePast' : 'woke', 'pastParticipe' : 'woken', 'TranslationFr' : 'réveiller'},
					{'Infinitive' : 'wear', 'simplePast' : 'wore', 'pastParticipe' : 'worn', 'TranslationFr' : 'porter des vêtements'},
					{'Infinitive' : 'weep', 'simplePast' : 'wept', 'pastParticipe' : 'wept', 'TranslationFr' : 'pleurer'},
					{'Infinitive' : 'wet', 'simplePast' : 'wet/wetted', 'pastParticipe' : 'wet/wetted', 'TranslationFr' : 'mouiller'},
					{'Infinitive' : 'win', 'simplePast' : 'won', 'pastParticipe' : 'won', 'TranslationFr' : 'gagner'},
					{'Infinitive' : 'wind', 'simplePast' : 'wond', 'pastParticipe' : 'wond', 'TranslationFr' : 'enrouler / remonter'},
					{'Infinitive' : 'withdraw', 'simplePast' : 'withdrew', 'pastParticipe' : 'withdrawn', 'TranslationFr' : 'se retirer'},
					{'Infinitive' : 'wring', 'simplePast' : 'wrung', 'pastParticipe' : 'wrung', 'TranslationFr' : 'tordre'},
					{'Infinitive' : 'write', 'simplePast' : 'wrote', 'pastParticipe' : 'written', 'TranslationFr' : 'écrire'}			
					];


function randomVerb(arrayVerb) {

	let rand = Math.floor(Math.random() * arrayVerb.length); // Un nombre aléatoire
	let randVerb = arrayVerb[rand]; // Un objet aléatoire contenu dans l'array des verbes

	let verb = randVerb.Infinitive; // La valeur de l'identifiant Infinitive
	let past = randVerb.simplePast; // La valeur de l'identifiant simplePast
	let participe = randVerb.pastParticipe; // La valeur de l'identifiant pastParticipe
	let trans = randVerb.TranslationFr; // La valeur de l'identifiant TranslationFr

	document.getElementById('infinitive').innerHTML = verb; // Affiche la valeur dans la div#infinitive.
	document.getElementById('simpleP').innerHTML = '<input type="text" id="simplePast" value="">'; // Efface le contenu de l'input.
	document.getElementById('pastP').innerHTML = '<input type="text" id="pastParticipe" value="">'; // Efface le contenu de l'input.

/**/
console.log(verb + ', ' + past + ', ' + participe + ', ' + trans);

	return randVerb;
} /* end randomVerb() */

let randVerb = randomVerb(arrayVerb); // L'objet aléatoire

function checkRespons() {

	let displayedVerb = randVerb.Infinitive; 
	let inputSimplePast = document.getElementById('simplePast').value; // Récupére la valeur de l'input#simplePast.
	let inputPastParticipe = document.getElementById('pastParticipe').value; // Récupére la valeur de l'input#pastParticipe.
/*
console.log(displayedVerb + ', ' + inputSimplePast + ', ' + inputPastParticipe);

console.log(displayedVerb + ', ' + randVerb.simplePast + ', ' + randVerb.pastParticipe + ', ' + randVerb.TranslationFr);
*/
	if (inputSimplePast == randVerb.simplePast && inputPastParticipe == randVerb.pastParticipe) {

		document.getElementById('infinit').innerHTML = '<div class="corrected-verb" type="text" id="infinitive">' 
			+ randVerb.Infinitive + '</div>';
		document.getElementById('simpleP').innerHTML = '<div class="corrected-verb" type="text" id="simplePast">' 
			+ randVerb.simplePast 
			+ '<span id="zoneCheckImages"><img src="assets/img/ico_greenValidate.svg" alt="ico_greenValidate" id="checkImages"></span></div>';
		document.getElementById('pastP').innerHTML = '<div class="corrected-verb" type="text" id="pastParticipe">' 
			+ randVerb.pastParticipe 
			+ '<span id="zoneCheckImages"><img src="assets/img/ico_greenValidate.svg" alt="ico_greenValidate" id="checkImages"></span></div>';
			
		document.getElementById('zoneBoutonCheck').innerHTML = '';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="checkRespons();"></button>';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="reloadScript();">Again</button>';


	} else if (inputSimplePast != randVerb.simplePast && inputPastParticipe == randVerb.pastParticipe) {

		document.getElementById('infinit').innerHTML = '<div class="corrected-verb" type="text" id="infinitive">' 
			+ randVerb.Infinitive + '</div>';
		document.getElementById('simpleP').innerHTML = '<div class="corrected-verb" type="text" id="simplePast">' 
			+ randVerb.simplePast + '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/red-cross-mark-25x25.png" alt="red-cross-mark" id="checkImages"></span></div>';
		document.getElementById('pastP').innerHTML = '<div class="corrected-verb" type="text" id="pastParticipe">' 
			+ randVerb.pastParticipe 
			+ '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/ico_greenValidate.svg" alt="ico_greenValidate" id="checkImages"></span></div>';
		
		document.getElementById('zoneBoutonCheck').innerHTML = '';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="checkRespons();">Check</button>';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="reloadScript();">Again</button>';

	} else if (inputSimplePast == randVerb.simplePast && inputPastParticipe != randVerb.pastParticipe) {

		document.getElementById('infinit').innerHTML = '<div class="corrected-verb" type="text" id="infinitive">' 
			+ randVerb.Infinitive + '</div>';
		document.getElementById('simpleP').innerHTML = '<div class="corrected-verb" type="text" id="simplePast">' 
			+ randVerb.simplePast 
			+ '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/ico_greenValidate.svg" alt="ico_greenValidate" id="checkImages"></span></div>';
		document.getElementById('pastP').innerHTML = '<div class="corrected-verb" type="text" id="pastParticipe">' 
			+ randVerb.pastParticipe 
			+ '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/ico_redCross.svg" alt="red-cross-mark" id="checkImages"></span></div>';
		
		document.getElementById('zoneBoutonCheck').innerHTML = '';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="checkRespons();">Check</button>';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="reloadScript();">Again</button>';

	} else if (inputSimplePast != randVerb.simplePast && inputPastParticipe != randVerb.pastParticipe) {

		document.getElementById('infinit').innerHTML = '<div class="corrected-verb" type="text" id="infinitive">' 
			+ randVerb.Infinitive + '</div>';
		document.getElementById('simpleP').innerHTML = '<div class="corrected-verb" type="text" id="simplePast">' 
			+ randVerb.simplePast + '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/ico_redCross.svg" alt="red-cross-mark" id="checkImages"></span></div>';
		document.getElementById('pastP').innerHTML = '<div class="corrected-verb" type="text" id="pastParticipe">' 
			+ randVerb.pastParticipe 
			+ '<span id="zoneCheckImages"><img type="image/svg+xml" src="assets/img/ico_redCross.svg" alt="red-cross-mark" id="checkImages"></span></div>';
		
		document.getElementById('zoneBoutonCheck').innerHTML = '';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="checkRespons();">Check</button>';
		document.getElementById('zoneBoutonCheck').innerHTML = '<button id="boutonCheck" onclick="reloadScript();">Again</button>';

	} else {

		alert("Alors ?");

	} 
}

/*
function startAgainAllTrue() {
	randomVerb(arrayVerb);		
}
*/
function reloadScript() {

	location.reload();		
}
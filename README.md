# DapperCalc

DapperCalc contains various calculations that power DapperBrew. This work is ongoing. Calculations may be incomplete, or incorrect. 

### TODO
- [x] abv
- [x] abw
- [x] plato2sg
- [x] sg2plato
- [x] aau
- [x] utilization
- [x] ibu
- [x] mcu
- [x] srm
- [x] sg2gp
- [x] gp2sg
- [x] real extract
- [x] calories
- [x] apparent attenuation
- [x] real attenuation
- [ ] dilution calc
- [x] specific gravity to gravity pnits
- [X] water addition
- [X] malt addition
- [X] shrinkage
- [X] evapPerHour
- [X] totalBoilLoss
- [X] postBoilVolume
- [X] postBoilGravity
- [ ] weight to volume
- [x] shrinkage
- [ ] refractometer reading adjustment
- [ ] hydromteter temp adjust
- [ ] yeast starter



## Methods

### dapperCalc.abv(og, fg)

Calculates the alcohol by volume (abv) from the original gravity of the wort (og) and final gravity of the beer (fg)

* og: original gravity of wort
* fg: final gravity of breer

```javascript
dapperCalc.abv(1.088, 1.013);
// 9.84
```

**Forumla:**  
*abv = (((1.05 x (og - fg)) / fg) / 0.79) x 100*;

### dapperCalc.abw(og, fg)

Calculates the alcohol by weight (abw) from the original gravity of the wort (og) and final gravity of the beer (fg)

* og: original gravity of wort
* fg: final gravity of breer

```javascript
dapperCalc.abw(1.088, 1.013);
// 7.71
```
**Forumla:**  
*abw = (abv x 0.79336) / fg*

### dapperCalc.sg2plato(sgravity)

Converts specific gravity (sg) to plato. Can also be used for sg to brix.

* sgravity: specific gravity of wort/beer

```javascript
dapperCalc.sg2plato(1.088);
// 21.1
```

**Forumla:**  
*plato = (-616.868) + (1111.14 x sgravity) - (630.272 x sgravity^2) + (135.997 x sgravity^3)*

### dapperCalc.plato2sg(plato)

Converts plato to specific gravity. Can also be used for brix to sg.

* plato: density of beer in plato (can also be brix)

```javascript
dapperCalc.plato2sg(18);
// 1.074
```

**Formula:**  
*sg = plato / (258.6 -((plato / 258.2) x 227.1)) + 1*

### dapperCalc.realExtract(og, fg)

Calculates the real extract (measure of the sugars which are fermented).  
See: http://hbd.org/ensmingr/

* og: original gravity
* fg: final gravity

```javascript
dapperCalc.realExtract(1.088, 1.012);
// 6.3544
```

**Formula:**  
*realExtract = (0.1808 × °Pi) + (0.8192 × °Pf)*

### dapperCalc.calories(og, fg)

Calculates number of calories in 12oz.  
see: http://hbd.org/ensmingr/

* og: original gravity
* fg: final gravity

```javascript
dapperCalc.calories(1.088, 1.012);
// 283.7
```

**Formula:**  
*calories = (6.9 x abw + 4.0 x (realExtract - .1)) x fg x 3.55*

### dapperCalc.aAttenuation(og, fg)

Calculates percentage of sugars converted into alcohol and carbon dioxide using apparent extract reading.
see: http://hbd.org/ensmingr/

* og: original gravity
* fg: final gravity

```javascript
dapperCalc.aAttenuation(1.088, 1.012);
// 85.3
```

**Formula:**  
*apparent attenuation = 100 x (1 - (°Pf / °Pi))*

### dapperCalc.rAttenuation(og, fg)

Calculates percentage of sugars converted into alcohol and carbon dioxide using real extract reading.
see: http://hbd.org/ensmingr/

* og: original gravity
* fg: final gravity

```javascript
dapperCalc.rAttenuation(1.088, 1.012);
// 69.9
```

**Formula:**  
*apparent attenuation = 100 x (1 - (real extract / °Pi)*

### dapperCalc.aau(weight, aa)

Returns the Alpha Acid Unit (aau) for hops

* weight: ounces of hops
* aa: Alpha Acids Percentage

```javascript
dapperCalc.aau(1.5, 12);
// 18
```

**Forumla:**  
*aau = weight x Alpha Acid Percentage*

### dapperCalc.utilization(time, gravity)

Calculates hop utilization based on the time left in boil, and gravity of wort. Primarily used in IBU calculations. Uses Tinseth calculations.

* time: time left in boil
* gravity: gravity of wort when adding hops

```javascript
dapperCalc.utilization(60, 1.048);
// 0.2348476097710606
```

**Forumla:**  
*bigness factor = 1.65 x 0.000125^(wort gravity - 1)*  
*boil time Factor = ( 1 - e^(-0.04 x time in mins) ) / 4.15*  
*utilization = bigness factor x boil time factor*

### dapperCalc.ibu(weight, aa, time, gravity, volume)

Calculates the International Bittering Units (IBU) for a single hop addition. This uses Tinseth calculations. Currently assumes pellets are used.

* weight: weight of hops (oz)
* aa: alpha acids percentage of hop used
* time: time left in boil
* gravity: gravity of wort when adding hops
* volume: post boil volume

```javascript
dapperCalc.ibu(1.5, 12, 60, 1.048, 5.5);
// 63.3
```

**Forumla:**  
*ibu = (aau x utilization x 74.89) / volume*  
*adjust for pellets hops = ibu x 1.1*

### dapperCalc.mcu(weight, lovibond, volume)

Calculates Malt Color Unit (MCU) for a grain addition

* weight: weight of grain (lb)
* lovibond: Degrees Lovibond for grain
* volume: volume of batch. Should be post-boil volume after cooling

```javascript
dapperCalc.mcu(9, 3.5, 5.5);
// 5.72
```

**Formula:**  
*mcu =  (weight x lovibond) / volume*

### dapperCalc.srm(mcu1, mcu2, ...)

Calculates color of the beer using Standard Reference Method (Morey equation). Can accept an infite # of arguments.

* mcu1: MCU for a grain addition. Number can be calculated using dapperCalc(mcu)

```javascript
dapperCalc.srm(5.72);
// 4.9
dapperCalc.srm(5.72, 2.54);
// 6.4
```

**Formula:**
*srm = 1.4922 x (MCU x 0.6859)*

### dapperCalc.sg2gp(sg)

Converts specific gravity measurement (ex: 1.088) to gravity points (ex: 88)

* sg: specific gravity

```javascript
dapperCalc.sg2gp(1.088);
// 88
```

**Formula:**  
*gravity points = (sg - 1) x 1000*

### dapperCalc.gp2sg(sg)

Converts gravity points (ex: 88) to specific gravity measurement (ex: 1.088)

* sg: specific gravity

```javascript
dapperCalc.gp2sg(88);
// 1.088
```

**Formula:**  
*specific gravity = (gravity points / 1000) + 1*

### dapperCalc.adjustWater(sg, tg, water)

Calculates how much water should be added to reach target gravity.  
Returns value in pounds

* sg: specific gravity
* tg: target gravity
* volume: current volume

```javascript
dapperCalc.adjustWater(1.088, 1.078, 5);
// .64
```

**Formula:**  
*amount of water to add = (volume x specific gravity points / target gravity points) - volume*

### dapperCalc.adjustExtract(sg, tg, water, extract)

Calculates how much extract should be added to reach target gravity.  
Returns value in pounds

* sg: specific gravity
* tg: target gravity
* volume: current volume
* extract: "DME" if using Dried Malt Extract. "LME" if using Liquid Malt Extract. Also accepts custom gravity point value.

```javascript
dapperCalc.adjustExtract(1.078, 1.088, 5, "LME");
// 1.39
dapperCalc.adjustExtract(1.078, 1.088, 5, "DME");
// 1.14
dapperCalc.adjustExtract(1.078, 1.088, 5, 46);
// 1.14
```

**Formula:**  
*amount of extract to add = (target gravity points - specific gravity points) x volume / extract gravity points*

##dapperCalc.shrinkage(percentage, volume)

Calculates how much volume (in gallons) is lost after wort cools.

* percentage: Percentage that total volume shrinks
* volume: volume of hot wort after boil

```javascript
dapperCalc.shrinkage(4, 6);
// 0.24
```

**Formula:**
*shrinkage = volume x (percentage/100)*

##dapperCalc.evapPerHour(volume, rate, measurement)

Calculates how much volume (in gallons) is lost per hour to evaporation

* volume: pre-boil volume
* rate: percentage or volume lost per hour
* "percPerHour" for percentage/hour. "volPerHour" for volume/hour

```javascript
dapperCalc.evapPerHour(6, 10, 'percPerHour');
// 0.60
dapperCalc.evapPerHour(6, .5, 'volPerHour');

```

##dapperCalc.totalBoilLoss(evapPerHour, boilTime)

##dapperCalc.postBoilVolume(startVol, boilLoss, shrinkLoss)

##dapperCalc.postBoilGravity(startVol, sg, finalVol)

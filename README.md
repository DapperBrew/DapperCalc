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
- [ ] calories
- [ ] brix2sg
- [ ] sg2brix
- [ ] attenuation
- [ ] plato


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

### dapperCalc.plato2sg

Converts plato to specific gravity. Can also be used for brix to sg.

* plato: density of beer in plato (can also be brix)

```javascript
dapperCalc.plato2sg(18);
// 1.074
```

**Forumula:**  
*sg = plato / (258.6 -((plato / 258.2) x 227.1)) + 1*

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

**Forumula**  
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

**Forumula**
*srm = 1.4922 x (MCU x 0.6859)*

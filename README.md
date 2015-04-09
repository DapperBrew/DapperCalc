# DapperCalc

DapperCalc contains various calculations that power DapperBrew 

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

Calculates hop utilization based on the time left in boil, and gravity of wort. Primarily used in IBU calculations.

* time: time left in boil
* gravity: gravity of wort when adding hops

```javascript
dapperCalc.utilization(60, 1.048);
// 0.2348476097710606
```

**Forumla:**  
*bigness factor = 1.65 * 0.000125^(wort gravity - 1)*  
*boil time Factor = ( 1 - e^(-0.04 x time in mins) ) / 4.15*  
*utilization = bigness factor * boil time factor*

### dapperCalc.ibu(weight, aa, time, gravity, volume)

Calculates the International Bittering Units (IBU) for a single hop addition. This uses Tinseth calculations. Currently assumes pellets are used.

* weight: ounces of hops
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
*adjust for pellets hops = ibu * 1.1*

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

## Modules

<dl>
<dt><a href="#module_abv">abv</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the alcohol by volume (abv) <br></p>
</dd>
<dt><a href="#module_abw">abw</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the Alcohol by weight (ABW)</p>
</dd>
<dt><a href="#module_sg2plato">sg2plato</a> ⇒ <code>number</code></dt>
<dd><p>Convert specific gravity (sg) to plato</p>
</dd>
<dt><a href="#module_plato2sg">plato2sg</a> ⇒ <code>number</code></dt>
<dd><p>Convert plato to specific gravity (sg)</p>
</dd>
<dt><a href="#module_realExtract">realExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate real extract from starting gravity &amp; final gravity.</p>
</dd>
<dt><a href="#module_caloriesAlcohol">caloriesAlcohol</a> ⇒ <code>number</code></dt>
<dd><p>Calculate number of calories from Alcohol in 12oz serving.</p>
</dd>
<dt><a href="#module_caloriesCarbs">caloriesCarbs</a> ⇒ <code>number</code></dt>
<dd><p>Calculate number of calories from carbs in 12oz serving.</p>
</dd>
<dt><a href="#module_caloriesTotal">caloriesTotal</a> ⇒ <code>number</code></dt>
<dd><p>Calculate number of calories in 12oz serving.</p>
</dd>
<dt><a href="#module_aAttenuation">aAttenuation</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the apparent attenuation</p>
</dd>
<dt><a href="#module_rAttenuation">rAttenuation</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the real attenuation</p>
</dd>
<dt><a href="#module_aau">aau</a> ⇒ <code>number</code></dt>
<dd><p>Alpha Acid Units</p>
</dd>
<dt><a href="#module_utilization">utilization</a> ⇒ <code>number</code></dt>
<dd><p>Hop Utilization (Tinseth)</p>
</dd>
</dl>

<a name="module_abv"></a>

## abv ⇒ <code>number</code>
Calculates the alcohol by volume (abv) <br>

**Returns**: <code>number</code> - (((1.05 x (og - fg)) / fg) / 0.79) x 100;  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 9.84
abv(1.088, 1.013);
```
<a name="module_abw"></a>

## abw ⇒ <code>number</code>
Calculates the Alcohol by weight (ABW)

**Returns**: <code>number</code> - (abv x 0.79336) / fg  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | The original gravity (og) |
| fg | <code>number</code> | The final gravity (nfg) |

**Example**  
```js
// returns 7.71
abw(1.088, 1.013);
```
<a name="module_sg2plato"></a>

## sg2plato ⇒ <code>number</code>
Convert specific gravity (sg) to plato

**Returns**: <code>number</code> - (-616.868) + (1111.14 x sgravity) - (630.272 x sgravity^2) + (135.997 x sgravity^3)  

| Param | Type | Description |
| --- | --- | --- |
| sg | <code>number</code> | the specific gravity (sg) |

**Example**  
```js
// returns 21.1
sg2plato(1.088);
```
<a name="module_plato2sg"></a>

## plato2sg ⇒ <code>number</code>
Convert plato to specific gravity (sg)

**Returns**: <code>number</code> - plato / (258.6 -((plato / 258.2) x 227.1)) + 1  

| Param | Type | Description |
| --- | --- | --- |
| plato | <code>number</code> | plato number to be converted |

**Example**  
```js
// returns 1.074
plato2sg(18);
```
<a name="module_realExtract"></a>

## realExtract ⇒ <code>number</code>
Calculate real extract from starting gravity & final gravity.

**Returns**: <code>number</code> - (0.1808 × °Pi) + (0.8192 × °Pf)  
**See**: [hbd.org/ensmingr](http://hbd.org/ensmingr/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 6.3544
realExtract(1.088, 1.012);
```
<a name="module_caloriesAlcohol"></a>

## caloriesAlcohol ⇒ <code>number</code>
Calculate number of calories from Alcohol in 12oz serving.

**Returns**: <code>number</code> - 1881.22 * fg * ((og - fg) / (1.775 - og))  
**See**: [www.homebrewersassociation.org](https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 210.61
caloriesAlcohol(1.088, 1.012);
```
<a name="module_caloriesCarbs"></a>

## caloriesCarbs ⇒ <code>number</code>
Calculate number of calories from carbs in 12oz serving.

**Returns**: <code>number</code> - 3550.0 * fg * ((0.1808 * og) + ((0.8192 * fg) - 1.0004))  
**See**: [www.homebrewersassociation.org](https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 91.04
caloriesCarbs(1.088, 1.012);
```
<a name="module_caloriesTotal"></a>

## caloriesTotal ⇒ <code>number</code>
Calculate number of calories in 12oz serving.

**Returns**: <code>number</code> - calories from alcohol + calories from carbs  
**See**: [www.homebrewersassociation.org](https://www.homebrewersassociation.org/how-to-brew/how-many-calories-are-in-beer/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 301.65
caloriesTotal(1.088, 1.012);
```
<a name="module_aAttenuation"></a>

## aAttenuation ⇒ <code>number</code>
Calculate the apparent attenuation

**Returns**: <code>number</code> - 100 x (1 - (°Pf / °Pi))  
**See**: [hbd.org/ensmingr](http://hbd.org/ensmingr/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// return 85.3
aAttenuation(1.088, 1.012);
```
<a name="module_rAttenuation"></a>

## rAttenuation ⇒ <code>number</code>
Calculate the real attenuation

**Returns**: <code>number</code> - 100 x (1 - (real extract / °Pi)  
**See**: [hbd.org/ensmingr](http://hbd.org/ensmingr/)  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// return 69.9
rAttenuation(1.088, 1.012);
```
<a name="module_aau"></a>

## aau ⇒ <code>number</code>
Alpha Acid Units

**Returns**: <code>number</code> - weight x Alpha Acid Percentage  
**Todo**

- [ ] Add imperial unit option (grams)


| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | weight of hops (in oz) |
| aa | <code>number</code> | Alpha Acidic percentage |

**Example**  
```js
// returns 18
aau(1.5, 12);
```
<a name="module_utilization"></a>

## utilization ⇒ <code>number</code>
Hop Utilization (Tinseth)

**Returns**: <code>number</code> - utilization = bigness factor x boil time factor  
**See**: [realbeer.com](http://realbeer.com/hops/research.html)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | time left in boil (minutes) |
| gravity | <code>number</code> | Specific gravity (sg) |

**Example**  
```js
// returns 0.2348476097710606
utilization(60, 1.048);
```

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
<dd><p>Calculate Alpha Acid Units</p>
</dd>
<dt><a href="#module_utilization">utilization</a> ⇒ <code>number</code></dt>
<dd><p>Hop Utilization (Tinseth)</p>
</dd>
<dt><a href="#module_ibu">ibu</a> ⇒ <code>number</code></dt>
<dd><p>Calculate IBU for hop addition (Tinseth / pellets)</p>
</dd>
<dt><a href="#module_mcu">mcu</a> ⇒ <code>number</code></dt>
<dd><p>Calculate Malt Color Units</p>
</dd>
<dt><a href="#module_srm.">srm.</a> ⇒ <code>number</code></dt>
<dd><p>Calculates color (SRM) of eer using standard reference method (Morey equation)</p>
</dd>
<dt><a href="#module_sg2gp">sg2gp</a> ⇒ <code>number</code></dt>
<dd><p>Convert specific gravity (sg) to gravity points.</p>
</dd>
<dt><a href="#module_gp2sg">gp2sg</a> ⇒ <code>number</code></dt>
<dd><p>Convert gravity points to specific gravity (sg)</p>
</dd>
<dt><a href="#module_adjustWater">adjustWater</a> ⇒ <code>number</code></dt>
<dd><p>Calculate water needed to reach target gravity.</p>
</dd>
<dt><a href="#module_adjustExtract">adjustExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate how much extract (in lb) is needed to reach target gravity.</p>
</dd>
<dt><a href="#module_shrinkage">shrinkage</a> ⇒ <code>number</code></dt>
<dd><p>Volume lost after wort cools (in gallons)</p>
</dd>
<dt><a href="#module_evapPerHour">evapPerHour</a> ⇒ <code>number</code></dt>
<dd><p>Calculate how much volume (gallons) is lost per hour to evaperation</p>
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
Calculate Alpha Acid Units

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
**Todo**

- [ ] Add rager scale option


| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | time left in boil (minutes) |
| gravity | <code>number</code> | Specific gravity (sg) |

**Example**  
```js
// returns 0.2348476097710606
utilization(60, 1.048);
```
<a name="module_ibu"></a>

## ibu ⇒ <code>number</code>
Calculate IBU for hop addition (Tinseth / pellets)

**Returns**: <code>number</code> - (aau x utilization x 74.89) / volume  
**See**: [howtobrew.com/](http://howtobrew.com/book/section-1/hops/hop-bittering-calculations)  
**Todo**

- [ ] allow for grams for hops
- [ ] allow for liter for volume
- [ ] allow for rager scale
- [ ] allow for whole hops


| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | Weight of hops (oz) |
| aa | <code>number</code> | Alpha acids percentage of hops |
| time | <code>number</code> | time left in boil (minutes) |
| gravity | <code>number</code> | Specific Gravity of wort when adding hops |
| volume | <code>number</code> | post boil volume (gallons) |

**Example**  
```js
// returns 63.3
ibu(1.5, 12, 60, 1.048, 5.5);
```
<a name="module_mcu"></a>

## mcu ⇒ <code>number</code>
Calculate Malt Color Units

**Returns**: <code>number</code> - (weight * lovibond) / volume  
**Todo**

- [ ] support kg for weight
- [ ] support liter for volume


| Param | Type | Description |
| --- | --- | --- |
| weight | <code>number</code> | weight of grain/fermentable (in lb) |
| lovibond | <code>number</code> | color of grains in lovibond |
| volume | <code>number</code> | batch size (in gallons) including deadspace/trub loss |

**Example**  
```js
// return 5.727
mcu(9, 3.5, 5.5);
```
<a name="module_srm."></a>

## srm. ⇒ <code>number</code>
Calculates color (SRM) of eer using standard reference method (Morey equation)

**Returns**: <code>number</code> - 1.4922 x (MCU x 0.6859)  

| Param | Type | Description |
| --- | --- | --- |
| ...mcuNum | <code>number</code> | MCU units to covert to SRM. Accepts infinite # of arguments. |

**Example**  
```js
// returns 4.9
srm(5.72);

// returns 6.4
srm(5.72, 2.54);
```
<a name="module_sg2gp"></a>

## sg2gp ⇒ <code>number</code>
Convert specific gravity (sg) to gravity points.

**Returns**: <code>number</code> - (sg - 1) x 1000  

| Param | Type | Description |
| --- | --- | --- |
| sg | <code>number</code> | The specific gravity (sg) |

**Example**  
```js
// return 88
sg2gp(1.088);
```
<a name="module_gp2sg"></a>

## gp2sg ⇒ <code>number</code>
Convert gravity points to specific gravity (sg)

**Returns**: <code>number</code> - (gravity points / 1000) + 1  

| Param | Type | Description |
| --- | --- | --- |
| gp | <code>number</code> | Gravitiy points |

**Example**  
```js
// return 1.088
gp2sg(88);
```
<a name="module_adjustWater"></a>

## adjustWater ⇒ <code>number</code>
Calculate water needed to reach target gravity.

**Returns**: <code>number</code> - (volume x sg / target gravity points) - volume  
**Todo**

- [ ] support litres for input volume
- [ ] support litres for return


| Param | Type | Description |
| --- | --- | --- |
| sg | <code>number</code> | Current/Specific gravity (sg) |
| tg | <code>number</code> | Target gravity |
| volume | <code>number</code> | current volume (gallons) |

**Example**  
```js
// return .64
adjustWater(1.088, 1.078, 5);
```
<a name="module_adjustExtract"></a>

## adjustExtract ⇒ <code>number</code>
Calculate how much extract (in lb) is needed to reach target gravity.

**Returns**: <code>number</code> - lb = (target gravity - sg) x volume / extract gravity points  
**Todo**

- [ ] support litres for input volume.
- [ ] support kilograms for output volume


| Param | Type | Description |
| --- | --- | --- |
| sg | <code>number</code> | Current / specific gravity (sg) |
| tg | <code>number</code> | target gravity |
| volume | <code>number</code> | volume (gallons) |
| extract | <code>string</code> &#124; <code>number</code> | 'DME', 'LME', or custom gravity point value. |

**Example**  
```js
// return 1.39
adjustExtract(1.078, 1.088, 5, 'LME');

// return 1.14
adjustExtract(1.078, 1.088, 5, 'DME');

// return 1.14
adjustExtract(1.078, 1.088, 5, 46);
```
<a name="module_shrinkage"></a>

## shrinkage ⇒ <code>number</code>
Volume lost after wort cools (in gallons)

**Returns**: <code>number</code> - volume x (percentage/100)  
**Todo**

- [ ] support input volume in litres
- [ ] support return volume in litres


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| volume | <code>number</code> |  | volume of hot wort post boil (gallons) |
| [percentage] | <code>number</code> | <code>4</code> | percentage the wort shrinks due to cooling |

**Example**  
```js
// return 0.24
shrinkage(6);

// return something
shrinkage(5, 3);
```
<a name="module_evapPerHour"></a>

## evapPerHour ⇒ <code>number</code>
Calculate how much volume (gallons) is lost per hour to evaperation

**Returns**: <code>number</code> - volume x (percentage lost per hour / 100)  
**Todo**

- [ ] option for input volume to be litres
- [ ] option for output volume to be litres


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| volume | <code>number</code> |  | pre-boil volume (gallons) |
| rate | <code>number</code> |  | percentage or voluem lost per hour |
| [measurement] | <code>string</code> | <code>&quot;percentage&quot;</code> | set rate lost per hour to either 'percentage' or 'volume' |

**Example**  
```js
// return 0.60
evapPerHour(6, 10);

// return 0.60
evapPerHour(6, 10, 'percentage');

// return 0.50
evapPerHour(6, .5, 'volume');
```

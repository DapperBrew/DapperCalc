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
<dt><a href="#module_sg2plato">sg2plato</a> ⇒ <code>number</code></dt>
<dd><p>Convert specific gravity (sg) to plato</p>
</dd>
<dt><a href="#module_plato2sg">plato2sg</a> ⇒ <code>number</code></dt>
<dd><p>Convert plato to specific gravity (sg)</p>
</dd>
<dt><a href="#module_originalExtract">originalExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate original extract from original gravity.</p>
</dd>
<dt><a href="#module_apparentExtract">apparentExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate apparent extract from final gravity.</p>
</dd>
<dt><a href="#module_attenuationCoefficient">attenuationCoefficient</a> ⇒ <code>number</code></dt>
<dd><p>Calculate attenuation coefficient from original extract.</p>
</dd>
<dt><a href="#module_realExtract">realExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate real extract from starting gravity &amp; final gravity.</p>
</dd>
<dt><a href="#module_abw">abw</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the Alcohol by weight (ABW)</p>
</dd>
<dt><a href="#module_abv">abv</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the alcohol by volume (abv) <br></p>
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
<dt><a href="#module_srm2lovibond">srm2lovibond</a> ⇒ <code>number</code></dt>
<dd><p>SRM to Lovibond</p>
</dd>
<dt><a href="#module_lovibond2srm">lovibond2srm</a> ⇒ <code>number</code></dt>
<dd><p>Lovibond to SRM</p>
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
<dt><a href="#module_dilute">dilute</a> ⇒ <code>number</code></dt>
<dd><p>Calculate new SG when wort is diluted</p>
</dd>
<dt><a href="#module_adjustWater">adjustWater</a> ⇒ <code>number</code></dt>
<dd><p>Calculate water needed to reach target gravity.</p>
</dd>
<dt><a href="#module_adjustExtract">adjustExtract</a> ⇒ <code>number</code></dt>
<dd><p>Calculate how much extract (in lb) is needed to reach target gravity.</p>
</dd>
<dt><a href="#module_evapLossPerHour">evapLossPerHour</a> ⇒ <code>number</code></dt>
<dd><p>Calculate how much volume (gallons) is lost per hour to evaperation</p>
</dd>
<dt><a href="#module_totalBoilLoss">totalBoilLoss</a> ⇒ <code>number</code></dt>
<dd><p>Calculate total volume (gallons) lost during boil to evaperation</p>
</dd>
<dt><a href="#module_shrinkage">shrinkage</a> ⇒ <code>number</code></dt>
<dd><p>Volume lost after wort cools (in gallons)</p>
</dd>
<dt><a href="#module_postBoilVolume">postBoilVolume</a> ⇒ <code>number</code></dt>
<dd><p>Calculate post boil volume (gallons)</p>
</dd>
<dt><a href="#module_postBoilGravity">postBoilGravity</a> ⇒ <code>number</code></dt>
<dd><p>Calculate post boil gravity.</p>
</dd>
<dt><a href="#module_estimateOriginalGravity">estimateOriginalGravity</a> ⇒ <code>number</code></dt>
<dd><p>Estimate Original Gravity</p>
</dd>
</dl>

<a name="module_sg2plato"></a>

## sg2plato ⇒ <code>number</code>
Convert specific gravity (sg) to plato

**Returns**: <code>number</code> - (-616.868) + (1111.14 x sg) - (630.272 x sg^2) + (135.997 x sg^3)  

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
<a name="module_originalExtract"></a>

## originalExtract ⇒ <code>number</code>
Calculate original extract from original gravity.

**Returns**: <code>number</code> - OE = -668.962 + (1262.45 * OG ) - (776.43 * OG^2) + (182.94 * OG^3)  
**See**: Dr. Michael Hall article, Zymurgy, Summer 1995  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |

**Example**  
```js
// returns 21.1
originalExtract(1.088);
```
<a name="module_apparentExtract"></a>

## apparentExtract ⇒ <code>number</code>
Calculate apparent extract from final gravity.

**Returns**: <code>number</code> - AE = -668.962 + (1262.45 * FG ) - (776.43 * FG^2) + (182.94 * FG^3)  
**See**: Dr. Michael Hall article, Zymurgy, Summer 1995  

| Param | Type | Description |
| --- | --- | --- |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 3.07
apparentExtract(1.012);
```
<a name="module_attenuationCoefficient"></a>

## attenuationCoefficient ⇒ <code>number</code>
Calculate attenuation coefficient from original extract.

**Returns**: <code>number</code> - q = .22 + (.001 * OE)  
**See**: Dr. Michael Hall article, Zymurgy, Summer 1995  

| Param | Type | Description |
| --- | --- | --- |
| oe | <code>number</code> | original extract (oe) |

**Example**  
```js
// returns 3.07
attenuationCoefficient(21.1);
```
<a name="module_realExtract"></a>

## realExtract ⇒ <code>number</code>
Calculate real extract from starting gravity & final gravity.

**Returns**: <code>number</code> - RE = ((q * OE) + AE) / (1 + q)  
**See**

- Dr. Michael Hall article, Zymurgy, Summer 1995
- (not currently used) [hbd.org/ensmingr](http://hbd.org/ensmingr/)


| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 6.5697
realExtract(1.088, 1.012);
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
// returns 7.23
abw(1.088, 1.019);
```
<a name="module_abv"></a>

## abv ⇒ <code>number</code>
Calculates the alcohol by volume (abv) <br>

**Returns**: <code>number</code> - abw * (FG / .749);  

| Param | Type | Description |
| --- | --- | --- |
| og | <code>number</code> | original gravity (og) |
| fg | <code>number</code> | final gravity (fg) |

**Example**  
```js
// returns 10.2
abv(1.089, 1.012);
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
// return 68.9
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
| gravity | <code>number</code> | Specific gravity (sg) of pre-boil wort |

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
| gravity | <code>number</code> | Specific Gravity of wort (pre-boil) |
| volume | <code>number</code> | post boil volume (gallons) |
| adjust | <code>number</code> | percentage to adjust hop utilization |

**Example**  
```js
// returns 63.3
ibu(1.5, 12, 60, 1.048, 5.5);
```
<a name="module_srm2lovibond"></a>

## srm2lovibond ⇒ <code>number</code>
SRM to Lovibond

**Returns**: <code>number</code> - Lovibond = (SRM + 0.76) / 1.3546  
**See**: [https://en.wikipedia.org/wiki/Standard_Reference_Method](https://en.wikipedia.org/wiki/Standard_Reference_Method)  

| Param | Type | Description |
| --- | --- | --- |
| srm | <code>number</code> | SRM # to be converted |

**Example**  
```js
// return 6.5
srm2lovibond(8);

// return 22.7
srm2lovibond(30);
```
<a name="module_lovibond2srm"></a>

## lovibond2srm ⇒ <code>number</code>
Lovibond to SRM

**Returns**: <code>number</code> - SRM = (1.3546 × lovibond) - 0.76  
**See**: [https://en.wikipedia.org/wiki/Standard_Reference_Method](https://en.wikipedia.org/wiki/Standard_Reference_Method)  

| Param | Type | Description |
| --- | --- | --- |
| srm | <code>number</code> | Lovibond # to be converted |

**Example**  
```js
// return 8.7
lovibond2srm(7);

// return 30.4
lovibond2srm(23);
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

**Returns**: <code>number</code> - 1.4922 x (MCU ^ 0.6859)  

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
<a name="module_dilute"></a>

## dilute ⇒ <code>number</code>
Calculate new SG when wort is diluted

**Returns**: <code>number</code> - (returns SG) GP = (Initial Volume * initial GP) / New Total Volume  

| Param | Type | Description |
| --- | --- | --- |
| sg | <code>number</code> | Specific Gravity of pre-diluted wort |
| volume | <code>number</code> | initial volume |
| volumeAdd | <code>number</code> | Volume of water to add |

**Example**  
```js
// return 1.046
dilute(1.054, 6, 1);
```
<a name="module_adjustWater"></a>

## adjustWater ⇒ <code>number</code>
Calculate water needed to reach target gravity.

**Returns**: <code>number</code> - (volume x sg / target gravity points) - volume  
**Todo**

- [ ] support liters for input volume
- [ ] support liters for return


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

- [ ] support liters for input volume.
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
<a name="module_evapLossPerHour"></a>

## evapLossPerHour ⇒ <code>number</code>
Calculate how much volume (gallons) is lost per hour to evaperation

**Returns**: <code>number</code> - volume x (percentage lost per hour / 100)  
**Todo**

- [ ] option for input volume to be liters
- [ ] option for output volume to be liters


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| volume | <code>number</code> |  | pre-boil volume (gallons) |
| ratePerHour | <code>number</code> |  | percentage or voluem lost per hour |
| [rateMeasurement] | <code>string</code> | <code>&quot;percentage&quot;</code> | set rate measurement to 'percentage' or 'volume' |

**Example**  
```js
// return 0.60
evapPerHour(6, 10);

// return 0.60
evapPerHour(6, 10, 'percentage');

// return 0.50
evapPerHour(6, .5, 'volume');
```
<a name="module_totalBoilLoss"></a>

## totalBoilLoss ⇒ <code>number</code>
Calculate total volume (gallons) lost during boil to evaperation

**Returns**: <code>number</code> - evapLossPerHour x (boilTime / 60)  
**Todo**

- [ ] support volume input in liters
- [ ] support volume output in liters


| Param | Type | Description |
| --- | --- | --- |
| lossPerHour | <code>number</code> | amount of volume (in lb) lost per hour to evaperation |
| boilTime | <code>number</code> | length of boil (in minutes) |

**Example**  
```js
// return 0.90
totalBoilLoss(.60, 90);
```
<a name="module_shrinkage"></a>

## shrinkage ⇒ <code>number</code>
Volume lost after wort cools (in gallons)

**Returns**: <code>number</code> - volume x (percentage/100)  
**Todo**

- [ ] support input volume in liters
- [ ] support return volume in liters
- [ ] support boilLoss in liters


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| volume | <code>number</code> |  | pre-boil volume (gallons) |
| boilLoss | <code>number</code> |  | Amount of volume (gallons) lost to boil. |
| [percentage] | <code>number</code> | <code>4</code> | percentage the wort shrinks due to cooling |

**Example**  
```js
// return 0.24
shrinkage(7, 0.90);

// return 0.15
shrinkage(7, 0.90, 3);
```
<a name="module_postBoilVolume"></a>

## postBoilVolume ⇒ <code>number</code>
Calculate post boil volume (gallons)

**Returns**: <code>number</code> - start_volume - (boil_loss + shrink_loss)  
**Todo**

- [ ] support input startVal in liters
- [ ] support input boilLoss in liters
- [ ] support input shrinkLoss in liters
- [ ] support return value in liters


| Param | Type | Description |
| --- | --- | --- |
| startVol | <code>number</code> | Starting volume pre-boil (gallons) |
| boilLoss | <code>number</code> | volume loss to boil (gallons) |
| shrinkLoss | <code>number</code> | volume loss to shrinking during cooling (gallons) |

**Example**  
```js
// return 6.86
postBoilVolume(7, 0.90, 0.24)
```
<a name="module_postBoilGravity"></a>

## postBoilGravity ⇒ <code>number</code>
Calculate post boil gravity.

**Returns**: <code>number</code> - (starting_volume x gravity_points) / final_volume  
**Todo**

- [ ] support starting volume in liters
- [ ] support final volume in liters


| Param | Type | Description |
| --- | --- | --- |
| startVol | <code>number</code> | Starting volume (gallons) |
| sg | <code>number</code> | starting gravity (sg) |
| finalVol | <code>number</code> | Final volume (gallons) |

**Example**  
```js
// return 1.072
postBoilGravity(7, 1.059, 5.71)
```
<a name="module_estimateOriginalGravity"></a>

## estimateOriginalGravity ⇒ <code>number</code>
Estimate Original Gravity

**Returns**: <code>number</code> - (gravityPoints * efficiency) / volume  
**Todo**

- [ ] support liters


| Param | Type | Description |
| --- | --- | --- |
| gravityPoints | <code>number</code> | Total gravity points of fermentables |
| sugarPoints | <code>number</code> | Total gravity points from sugars (dextrose, etc) |
| efficiency | <code>number</code> | (mash or brewhouse) |
| vol | <code>number</code> | into fermentor (if brewhouse eff) or pre-boil vol (if mash eff) |

**Example**  
```js
// return 1.061
estimateOriginalGravity(429, 46, 75, 6)
```

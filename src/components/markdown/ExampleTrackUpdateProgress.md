 Another way of getting progress after update is the `progress` property of the track object. By default this value is equal to the value of the `timeFraction`. However `progress` property is modified by the `timing` function and the `remap` property if these are set.

 - `timing` function can be used to modify the value of the `timeFraction`, for example by the easing function
 - `remap` array maps the default `0` to `1` range of the `timeFraction` to a new range of numbers

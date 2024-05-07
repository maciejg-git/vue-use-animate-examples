Track can have a number of frames that are played in sequence. To advance to the next frame call the `next` function of the track anywhere in the `draw` function. During next draw call new frame wil be used to update track progress. To repeat current frame instead of advancing call `repeat` function of the track. The index of the current frame is stored in the `frameIndex` property of the track object.

While you can call `next` anytime there are two useful functions that check if the progress for current frame has finished before advancing:

- `isComplete()` will check if the current `timeFraction` computed in the last track `update` is equal to `1` (or `0` for reversed frames).
- `isAllComplete()` will check if all `timeFractions` computed by the track `update` during current draw were equal to `1` (or `0` for reversed frames).

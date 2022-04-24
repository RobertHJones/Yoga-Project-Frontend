Build in react native for mobile
TDD?

Create separate CSS rather than inline and research how to use react native further

Search by - English name, Sanskrit name, which series, strengthens, stretches

If sanskrit returns result display this, otherwise search English, otherwise could not find result

Conditional rendering of results -

Array.length === 0 "no results found", or "featured pose" initially which could then be replaced, is this possible? Featured pose on useEffect?
Array.length === 1 "full information, large image"
Array.length > 1 "grid display of results"

If the API URL doesn't work, check the react native dotenv docs

On the series search, it needs to display them in the correct order - assign each pose a numerical position value and then use .sort on results

Landing page featured pose, RNG for fetch request on order and then RNG in array index to get random out of primary, second, standing etc

Conditional render for image vs video depending on what the link is - should be doable taken from the end of the link .jpg vs movie file

Next tasks -

Sort out z-index/styling so that you can view drop down with images there

Select individual pose from list - find way to do this

if random search brings up more than one result, how to display only one?

Deploy

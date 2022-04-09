Build in react or next?
TDD?

Search by - English name, Sanskrit name, which series, strengthens, stretches

If sanskrit returns result display this, otherwise search English, otherwise could not find result

Conditional rendering of results -

Array.length === 0 "no results found"
Array.length === 1 "full information, large image"
Array.length > 1 "grid display of results"

On the series search, it needs to display them in the correct order - assign each pose a numerical position value and then use .sort on results

Landing page featured pose, RNG for fetch request on order and then RNG in array index to get random out of primary, second, standing etc

Conditional render for image vs video depending on what the link is - should be doable taken from the end of the link .jpg vs movie file

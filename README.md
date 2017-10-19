# Omidyar Kenya Report

## Structure


## Functions
[There are some Jekyll includes that serve as functions]

### Figures
`{% include figure.html src="[the source, without site.baseurl]" %}`

The figure function takes these parameters:
- `src` (required; should be used without `{{ site.baseurl }}`, but takes a leading `/`)
- `class` (optional)
- `alt` (optional)
- `caption` (optional)
- `source` (optional)

Figures can be used without a class, or with:
- `.fullWidth`
- `.floatLeft` _(TBD)_
- `.floatRight` _(TBD)_

### Fly-Out Features
Throughout the report there are links to features, case studies, etc. that are separate from the narrative of the report. These features use the `flyOut.html` include, and pass in the Markdown file like this:

Include content as a variable
```
{% capture variableName %}{% include /content/0.0.1_variableName.md %}{% endcapture %}
```
Markdownify the variable
```
{% capture variableName %}{{ variableName | markdownify }}{% endcapture %}
```
Include the flyOut function and pass in a title, and the variable content
```
{% include flyOut.html title="Case Study: A Closer Look At Fly-Out Features" content=variableName %}
```

### Navigation

`_data/navigation.yml` is used to control the site's navigation. The top-level navigation, and sub-section navigation is managed in the same way. Sub-section URLs should point to the named anchor tags within each section's Markdown file.

## Contributing

Bug reports and pull requests are welcome on GitHub.

## License

This report is distributed with a [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0) license.

![Creative Commons Attribution-ShareAlike 4.0 International logo](https://licensebuttons.net/l/by-sa/3.0/88x31.png)

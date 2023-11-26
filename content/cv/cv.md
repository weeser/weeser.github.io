---
title: My page
type: landing

sections:
  - block: markdown
    content:
      title: My title
      subtitle: My subtitle
      text: hello world
  - block: markdown
    content:
      title: Testing
      subtitle: ''
      text: |-
        hello
    design:
      columns: '1'
  - block: collection
    content:
      title: Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
---
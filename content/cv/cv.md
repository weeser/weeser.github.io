---
title: Curriculum Vitae
type: landing

sections:
  - block: markdown
    content:
      title: Contact
      text: |-
        [weeser@ksu.edu](mailto:weeser@ksu.edu)
  - block: markdown
    content:
      title: Education
      subtitle: ''
      text: |-
        {{% include file="/cv/education.md" type="md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Professional Experience
      subtitle: ''
      text: |-
        {{% include file="/cv/professionalExperience.md" type="md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Teaching Experience
      subtitle: ''
      text: |-
        {{% include file="/cv/teachingExperience.md" type="md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Organizaions
      subtitle: ''
      text: |-
        {{% include file="/cv/organizations.md" type="md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Service
      subtitle: ''
      text: |-
        {{% include file="/cv/service.md" type="md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Awards
      subtitle: ''
      text: |-
        {{% include file="/cv/awards.md" type="md" %}} 
    design:
      columns: '1'
  - block: collection
    content:
      title: Publications
      count: 0
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
---
---
title: Curriculum Vitae
type: landing
url: /cv/

sections:
  - block: contact
    id: contact
    content:
      title: Contact
      # Contact (add or remove contact options as necessary)
      email: weeser@ksu.edu
      phone: 785 532 7929
      appointment_url: 'https://calendly.com/weeser'
      address:
        street: 2214 Engineering Hall, 1701D Platt St.
        city: Manhattan
        region: KS
        postcode: '66502'
        country: United States
        country_code: US
      # Automatically link email and phone or display as text?
      autolink: true
    design:
      columns: '2'
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
---
title: My page
type: landing

sections:
  - block: markdown
    content:
      title: Contact
      subtitle: My subtitle
      text: |-
        [weeser@ksu.edu](mailto:weeser@ksu.edu)
  - block: markdown
    content:
      title: Education
      subtitle: ''
      text: |-
        hello
    design:
      columns: '1'
  - block: markdown
    content:
      title: Education
      subtitle: ''
      text: |-
        <table>
            <tbody>
                <tr>
                    <td><strong>Ph.D. (Computer Science)</strong> — Kansas State University, Manhattan, KS
                        <strong>Dissertation</strong><em>: Bringing Computational Thinking to K-12 and Higher Education
                        </em></td>
                    <td>2013-2017</td>
                </tr>
                <tr>
                    <td><strong>M.S. (Computer Science) </strong>— Kansas State University, Manhattan, KS
                        <strong>Thesis:</strong> <em>A Convolutive Model for Polyphonic Instrument Identification and Pitch Detection using Combined Classification</em></td>
                    <td>2011-2013</td>
                </tr>
                <tr>
                    <td><strong>B.S. (Computer Systems Technology) </strong>— Kansas State University, Salina, KS</td>
                    <td>2007-2011</td>
                </tr>
            </tbody>
        </table>

    design:
      columns: '1'
  - block: markdown
    content:
      title: Professional Experience
      subtitle: ''
      text: |-
        {{% include file="/publication/test.md" %}} 
    design:
      columns: '1'
  - block: markdown
    content:
      title: Awards
      subtitle: ''
      text: |-
        hello
    design:
      columns: '1'
  - block: collection
    content:
      title: Publications
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
---
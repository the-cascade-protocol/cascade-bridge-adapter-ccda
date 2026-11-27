# fixtures — Agent Context

The cases a Bridge's harness runs, and the inputs and expected outputs they name.
Nothing here executes; `manifest.ttl` declares the cases and the rule each is
judged by, and the crate records where every file came from.

## A copied input carries its checksum and is never edited

`.gitattributes` and `.editorconfig` keep every file under `in/`, `facts/`, `expected/` and
`findings/` from normalisation. The crate records a checksum and size for a copied input and
for nothing else under `fixtures/`: the lint recomputes it, so a copy that changed fails. A file
written here has none, because git holds it.

No input is ever edited, copied or authored: a different input is a new file under a new name.
An input is one of two kinds, and the crate says which:

- **Copied**: byte for byte from `../../conformance`, `fixtures/ccda/` at the commit the
  crate's `isBasedOn` names, under the same file name, with a `sameAs` to its blob and its
  checksum. An input without a `sameAs` is not copied, whatever its description says ("Copied and
  trimmed" is authored). None names a custodian or an author, so each fails the CDA schema, and
  its findings say where.
- **Authored here**: written for a case the conformance corpus does not hold,
  with the date it was written, and no checksum. Each validates against the CDA schema, bar a
  malformed value a case is about.

An input is committed once. A case that needs the same bytes twice names one
file in both of its entries.

A findings file is a Bridge's own `convert --findings` output over the input
beside it, committed unedited, and compared as a graph, never as bytes. So is an
expected graph, its `convert` output, never written by hand; each record's name
in it is recomputed outside SPARQL from its inputs with cascade-vocabulary's
`tests/naming.py`.

An identity relation names a record by its arrival's selector, the clinical
statement's XPath from the document element.

## Checks CI cannot run

- Each `sameAs` copy is byte-identical to conformance. Compare against the
  **blobs**, never the worktree: a clone with `core.autocrlf=true` holds those
  files as CRLF, and "fixing" that would break each copy's recorded checksum.

  ```
  git -C ../../conformance show <commit>:fixtures/ccda/X.xml | cmp - in/X.xml
  ```
- Each authored input validates against `../schema/infrastructure/cda/CDA_SDTC.xsd`, bar the
  value a case is about: an input for a malformed `ID` says in the crate which it breaks.

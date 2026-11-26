window.BENCHMARK_DATA = {
  "lastUpdate": 1795698800704,
  "repoUrl": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda",
  "entries": {
    "Bridge performance": [
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f03627b3cf6cbd3e66bddb6a4bca77c52bf31622",
          "message": "Merge pull request #87 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T12:59:43-08:00",
          "tree_id": "9e7a7943474096e71590f72fe7eff6ca3274cd05",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-ccda/commit/f03627b3cf6cbd3e66bddb6a4bca77c52bf31622"
        },
        "date": 1795122009033,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.421734,
            "range": "0.420985-0.42742",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.239549,
            "range": "0.232259-0.246421",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.459089,
            "range": "0.459089-0.459089",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 370860032,
            "range": "362250240-372178944",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.087358,
            "range": "0.087358-0.087358",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000332,
            "range": "0.000332-0.000332",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000323,
            "range": "0.000323-0.000323",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001202,
            "range": "0.001202-0.001202",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.00067,
            "range": "0.00067-0.00067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.012148,
            "range": "0.012148-0.012148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.00192,
            "range": "0.00192-0.00192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000241,
            "range": "0.000241-0.000241",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000689,
            "range": "0.000689-0.000689",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.00612,
            "range": "0.00612-0.00612",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.004407,
            "range": "0.004407-0.004407",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.002388,
            "range": "0.002388-0.002388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.005806,
            "range": "0.005806-0.005806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.019757,
            "range": "0.019757-0.019757",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000277,
            "range": "0.000277-0.000277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000494,
            "range": "0.000494-0.000494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000388,
            "range": "0.000388-0.000388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.001691,
            "range": "0.001691-0.001691",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.00292,
            "range": "0.00292-0.00292",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.001596,
            "range": "0.001596-0.001596",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000804,
            "range": "0.000804-0.000804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.001809,
            "range": "0.001809-0.001809",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000368,
            "range": "0.000368-0.000368",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000068,
            "range": "0.000068-0.000068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.002398,
            "range": "0.002398-0.002398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001387,
            "range": "0.001387-0.001387",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.012105,
            "range": "0.012105-0.012105",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000398,
            "range": "0.000398-0.000398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007998,
            "range": "0.007998-0.007998",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.090216,
            "range": "0.090216-0.090216",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.057938,
            "range": "0.057938-0.057938",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.023802,
            "range": "0.023802-0.023802",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001119,
            "range": "0.001119-0.001119",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.00006,
            "range": "0.00006-0.00006",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.020545,
            "range": "0.020545-0.020545",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.056486,
            "range": "0.056486-0.056486",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.027049,
            "range": "0.027049-0.027049",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.106485,
            "range": "0.106485-0.106485",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.029596,
            "range": "0.029596-0.029596",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.012718,
            "range": "0.012718-0.012718",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.008041,
            "range": "0.008041-0.008041",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000937,
            "range": "0.000937-0.000937",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.008942,
            "range": "0.008942-0.008942",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.015156,
            "range": "0.015156-0.015156",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda/load",
            "value": 0.731409,
            "range": "0.730826-0.736337",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005345,
            "range": "0.005343-0.007177",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.726064,
            "range": "0.723649-0.730994",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.00431,
            "range": "0.004299-0.004401",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.017109,
            "range": "0.01689-0.022553",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001138,
            "range": "0.001089-0.013259",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f03627b3cf6cbd3e66bddb6a4bca77c52bf31622",
          "message": "Merge pull request #87 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T20:59:43Z",
          "url": "https://github.com/jayostis/cascade-bridge-adapter-ccda/commit/f03627b3cf6cbd3e66bddb6a4bca77c52bf31622"
        },
        "date": 1795146524112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.543715,
            "range": "0.498866-0.54525",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.201608,
            "range": "0.186331-0.216602",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.349686,
            "range": "0.349686-0.349686",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 370630656,
            "range": "338497536-372555776",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.072578,
            "range": "0.072578-0.072578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000238,
            "range": "0.000238-0.000238",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000216,
            "range": "0.000216-0.000216",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001043,
            "range": "0.001043-0.001043",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000502,
            "range": "0.000502-0.000502",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.009736,
            "range": "0.009736-0.009736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.001567,
            "range": "0.001567-0.001567",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000222,
            "range": "0.000222-0.000222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000557,
            "range": "0.000557-0.000557",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.00451,
            "range": "0.00451-0.00451",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.003073,
            "range": "0.003073-0.003073",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.001826,
            "range": "0.001826-0.001826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.004419,
            "range": "0.004419-0.004419",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.014685,
            "range": "0.014685-0.014685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000361,
            "range": "0.000361-0.000361",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000615,
            "range": "0.000615-0.000615",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000483,
            "range": "0.000483-0.000483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.0024,
            "range": "0.0024-0.0024",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.00323,
            "range": "0.00323-0.00323",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.002144,
            "range": "0.002144-0.002144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001019,
            "range": "0.001019-0.001019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.00235,
            "range": "0.00235-0.00235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000494,
            "range": "0.000494-0.000494",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000094,
            "range": "0.000094-0.000094",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.003018,
            "range": "0.003018-0.003018",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.00113,
            "range": "0.00113-0.00113",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.014317,
            "range": "0.014317-0.014317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000585,
            "range": "0.000585-0.000585",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.006489,
            "range": "0.006489-0.006489",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.074654,
            "range": "0.074654-0.074654",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.041468,
            "range": "0.041468-0.041468",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.018209,
            "range": "0.018209-0.018209",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.00093,
            "range": "0.00093-0.00093",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000067,
            "range": "0.000067-0.000067",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.0157,
            "range": "0.0157-0.0157",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.043046,
            "range": "0.043046-0.043046",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.021175,
            "range": "0.021175-0.021175",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.062279,
            "range": "0.062279-0.062279",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.035544,
            "range": "0.035544-0.035544",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.010709,
            "range": "0.010709-0.010709",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.00653,
            "range": "0.00653-0.00653",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000755,
            "range": "0.000755-0.000755",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.006869,
            "range": "0.006869-0.006869",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.011751,
            "range": "0.011751-0.011751",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.227721,
            "range": "1.188383-1.238513",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 0.928499,
            "range": "0.911184-0.928968",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.198352,
            "range": "1.198352-1.198352",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 386940928,
            "range": "358408192-452268032",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.230699,
            "range": "0.230699-0.230699",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000818,
            "range": "0.000818-0.000818",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000801,
            "range": "0.000801-0.000801",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.001038,
            "range": "0.001038-0.001038",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001537,
            "range": "0.001537-0.001537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.025032,
            "range": "0.025032-0.025032",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.004148,
            "range": "0.004148-0.004148",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000259,
            "range": "0.000259-0.000259",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002379,
            "range": "0.002379-0.002379",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.013544,
            "range": "0.013544-0.013544",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.009218,
            "range": "0.009218-0.009218",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.006199,
            "range": "0.006199-0.006199",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.013705,
            "range": "0.013705-0.013705",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.044291,
            "range": "0.044291-0.044291",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.00099,
            "range": "0.00099-0.00099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.002048,
            "range": "0.002048-0.002048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.00097,
            "range": "0.00097-0.00097",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.005957,
            "range": "0.005957-0.005957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.009959,
            "range": "0.009959-0.009959",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.011132,
            "range": "0.011132-0.011132",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.00485,
            "range": "0.00485-0.00485",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.004901,
            "range": "0.004901-0.004901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.00107,
            "range": "0.00107-0.00107",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000161,
            "range": "0.000161-0.000161",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.010759,
            "range": "0.010759-0.010759",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.004003,
            "range": "0.004003-0.004003",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.045337,
            "range": "0.045337-0.045337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001723,
            "range": "0.001723-0.001723",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.004685,
            "range": "0.004685-0.004685",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.237678,
            "range": "0.237678-0.237678",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.147893,
            "range": "0.147893-0.147893",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.05469,
            "range": "0.05469-0.05469",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.00072,
            "range": "0.00072-0.00072",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000047,
            "range": "0.000047-0.000047",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.042864,
            "range": "0.042864-0.042864",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.124712,
            "range": "0.124712-0.124712",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.17777,
            "range": "0.17777-0.17777",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.201505,
            "range": "0.201505-0.201505",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.110231,
            "range": "0.110231-0.110231",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.041148,
            "range": "0.041148-0.041148",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.004722,
            "range": "0.004722-0.004722",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.001826,
            "range": "0.001826-0.001826",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.0184,
            "range": "0.0184-0.0184",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.034147,
            "range": "0.034147-0.034147",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 2.58795,
            "range": "2.55751-2.654667",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.274248,
            "range": "2.263624-2.280747",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 2.545785,
            "range": "2.545785-2.545785",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 439136256,
            "range": "432971776-556335104",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.430901,
            "range": "0.430901-0.430901",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.006143,
            "range": "0.006143-0.006143",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.012192,
            "range": "0.012192-0.012192",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000505,
            "range": "0.000505-0.000505",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.005285,
            "range": "0.005285-0.005285",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.02021,
            "range": "0.02021-0.02021",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.00648,
            "range": "0.00648-0.00648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000403,
            "range": "0.000403-0.000403",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.012877,
            "range": "0.012877-0.012877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.024661,
            "range": "0.024661-0.024661",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.011858,
            "range": "0.011858-0.011858",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.013346,
            "range": "0.013346-0.013346",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.023605,
            "range": "0.023605-0.023605",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.11115,
            "range": "0.11115-0.11115",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.005088,
            "range": "0.005088-0.005088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.005418,
            "range": "0.005418-0.005418",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.002186,
            "range": "0.002186-0.002186",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.012517,
            "range": "0.012517-0.012517",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.01229,
            "range": "0.01229-0.01229",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.00572,
            "range": "0.00572-0.00572",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.009129,
            "range": "0.009129-0.009129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.045149,
            "range": "0.045149-0.045149",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000524,
            "range": "0.000524-0.000524",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000274,
            "range": "0.000274-0.000274",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.021023,
            "range": "0.021023-0.021023",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.005577,
            "range": "0.005577-0.005577",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.101331,
            "range": "0.101331-0.101331",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.003688,
            "range": "0.003688-0.003688",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.004523,
            "range": "0.004523-0.004523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.450109,
            "range": "0.450109-0.450109",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.286225,
            "range": "0.286225-0.286225",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.089261,
            "range": "0.089261-0.089261",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001587,
            "range": "0.001587-0.001587",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000046,
            "range": "0.000046-0.000046",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.092663,
            "range": "0.092663-0.092663",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.250254,
            "range": "0.250254-0.250254",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.520997,
            "range": "0.520997-0.520997",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.403214,
            "range": "0.403214-0.403214",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.244207,
            "range": "0.244207-0.244207",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.09501,
            "range": "0.09501-0.09501",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.004559,
            "range": "0.004559-0.004559",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.003706,
            "range": "0.003706-0.003706",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.040317,
            "range": "0.040317-0.040317",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.063629,
            "range": "0.063629-0.063629",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.615906,
            "range": "0.605049-0.749429",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005428,
            "range": "0.005216-0.008465",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.610691,
            "range": "0.599455-0.740964",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.003789,
            "range": "0.003625-0.004374",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.015178,
            "range": "0.013491-0.017408",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001078,
            "range": "0.000962-0.002401",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f03627b3cf6cbd3e66bddb6a4bca77c52bf31622",
          "message": "Merge pull request #87 from jayostis/feat/perf-files\n\nci(perf): a performance file for each main run",
          "timestamp": "2026-11-19T20:59:43Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/f03627b3cf6cbd3e66bddb6a4bca77c52bf31622"
        },
        "date": 1795232941533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.403188,
            "range": "0.403101-0.414486",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.230239,
            "range": "0.229628-0.232357",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.413056,
            "range": "0.413056-0.413056",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 357801984,
            "range": "339623936-367493120",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.086167,
            "range": "0.086167-0.086167",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000339,
            "range": "0.000339-0.000339",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000315,
            "range": "0.000315-0.000315",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001165,
            "range": "0.001165-0.001165",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000648,
            "range": "0.000648-0.000648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.01211,
            "range": "0.01211-0.01211",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.001989,
            "range": "0.001989-0.001989",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000276,
            "range": "0.000276-0.000276",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000684,
            "range": "0.000684-0.000684",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.006071,
            "range": "0.006071-0.006071",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.004247,
            "range": "0.004247-0.004247",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.002284,
            "range": "0.002284-0.002284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.003709,
            "range": "0.003709-0.003709",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.011846,
            "range": "0.011846-0.011846",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000415,
            "range": "0.000415-0.000415",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000806,
            "range": "0.000806-0.000806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.00061,
            "range": "0.00061-0.00061",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.00273,
            "range": "0.00273-0.00273",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.003903,
            "range": "0.003903-0.003903",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.002589,
            "range": "0.002589-0.002589",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000913,
            "range": "0.000913-0.000913",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.001863,
            "range": "0.001863-0.001863",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000384,
            "range": "0.000384-0.000384",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000068,
            "range": "0.000068-0.000068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.002355,
            "range": "0.002355-0.002355",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001402,
            "range": "0.001402-0.001402",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.013686,
            "range": "0.013686-0.013686",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000703,
            "range": "0.000703-0.000703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007734,
            "range": "0.007734-0.007734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.089135,
            "range": "0.089135-0.089135",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.053335,
            "range": "0.053335-0.053335",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.022666,
            "range": "0.022666-0.022666",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001052,
            "range": "0.001052-0.001052",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000058,
            "range": "0.000058-0.000058",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.020559,
            "range": "0.020559-0.020559",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.046234,
            "range": "0.046234-0.046234",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.02561,
            "range": "0.02561-0.02561",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.073674,
            "range": "0.073674-0.073674",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.036292,
            "range": "0.036292-0.036292",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.012947,
            "range": "0.012947-0.012947",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.007774,
            "range": "0.007774-0.007774",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000951,
            "range": "0.000951-0.000951",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.008803,
            "range": "0.008803-0.008803",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.013967,
            "range": "0.013967-0.013967",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.461312,
            "range": "1.427903-1.559766",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.162681,
            "range": "1.162444-1.182496",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.436668,
            "range": "1.436668-1.436668",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 430665728,
            "range": "369324032-451698688",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.296726,
            "range": "0.296726-0.296726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000878,
            "range": "0.000878-0.000878",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000854,
            "range": "0.000854-0.000854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.001085,
            "range": "0.001085-0.001085",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001938,
            "range": "0.001938-0.001938",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.029463,
            "range": "0.029463-0.029463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.007222,
            "range": "0.007222-0.007222",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000313,
            "range": "0.000313-0.000313",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002036,
            "range": "0.002036-0.002036",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.016931,
            "range": "0.016931-0.016931",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.01074,
            "range": "0.01074-0.01074",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.007252,
            "range": "0.007252-0.007252",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.017033,
            "range": "0.017033-0.017033",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.054576,
            "range": "0.054576-0.054576",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.001099,
            "range": "0.001099-0.001099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.0024,
            "range": "0.0024-0.0024",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.001087,
            "range": "0.001087-0.001087",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.008627,
            "range": "0.008627-0.008627",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.012141,
            "range": "0.012141-0.012141",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.007965,
            "range": "0.007965-0.007965",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.003941,
            "range": "0.003941-0.003941",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.003374,
            "range": "0.003374-0.003374",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.00085,
            "range": "0.00085-0.00085",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000146,
            "range": "0.000146-0.000146",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.011081,
            "range": "0.011081-0.011081",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.003899,
            "range": "0.003899-0.003899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.056928,
            "range": "0.056928-0.056928",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001648,
            "range": "0.001648-0.001648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.005273,
            "range": "0.005273-0.005273",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.303523,
            "range": "0.303523-0.303523",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.17578,
            "range": "0.17578-0.17578",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.07478,
            "range": "0.07478-0.07478",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.000765,
            "range": "0.000765-0.000765",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000046,
            "range": "0.000046-0.000046",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.051404,
            "range": "0.051404-0.051404",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.152204,
            "range": "0.152204-0.152204",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.219737,
            "range": "0.219737-0.219737",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.213872,
            "range": "0.213872-0.213872",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.121357,
            "range": "0.121357-0.121357",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.048688,
            "range": "0.048688-0.048688",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.005307,
            "range": "0.005307-0.005307",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.002283,
            "range": "0.002283-0.002283",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.022503,
            "range": "0.022503-0.022503",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.044419,
            "range": "0.044419-0.044419",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 3.165817,
            "range": "3.156764-3.189598",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.799851,
            "range": "2.796208-2.840411",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 3.157024,
            "range": "3.157024-3.157024",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 540516352,
            "range": "507781120-543719424",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.541742,
            "range": "0.541742-0.541742",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.006829,
            "range": "0.006829-0.006829",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.014364,
            "range": "0.014364-0.014364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000479,
            "range": "0.000479-0.000479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.005339,
            "range": "0.005339-0.005339",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.023746,
            "range": "0.023746-0.023746",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.006791,
            "range": "0.006791-0.006791",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000433,
            "range": "0.000433-0.000433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.015728,
            "range": "0.015728-0.015728",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.032903,
            "range": "0.032903-0.032903",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.014255,
            "range": "0.014255-0.014255",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.015831,
            "range": "0.015831-0.015831",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.028694,
            "range": "0.028694-0.028694",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.136293,
            "range": "0.136293-0.136293",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.005909,
            "range": "0.005909-0.005909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.005786,
            "range": "0.005786-0.005786",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.0019,
            "range": "0.0019-0.0019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.013368,
            "range": "0.013368-0.013368",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.014007,
            "range": "0.014007-0.014007",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.006504,
            "range": "0.006504-0.006504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.011177,
            "range": "0.011177-0.011177",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.053364,
            "range": "0.053364-0.053364",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000492,
            "range": "0.000492-0.000492",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000254,
            "range": "0.000254-0.000254",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.024492,
            "range": "0.024492-0.024492",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.006089,
            "range": "0.006089-0.006089",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.136372,
            "range": "0.136372-0.136372",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.003366,
            "range": "0.003366-0.003366",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.005267,
            "range": "0.005267-0.005267",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.560978,
            "range": "0.560978-0.560978",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.336871,
            "range": "0.336871-0.336871",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.113211,
            "range": "0.113211-0.113211",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001727,
            "range": "0.001727-0.001727",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000058,
            "range": "0.000058-0.000058",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.109278,
            "range": "0.109278-0.109278",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.303617,
            "range": "0.303617-0.303617",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.709324,
            "range": "0.709324-0.709324",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.453429,
            "range": "0.453429-0.453429",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.300283,
            "range": "0.300283-0.300283",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.122056,
            "range": "0.122056-0.122056",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.0053,
            "range": "0.0053-0.0053",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.004712,
            "range": "0.004712-0.004712",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.053685,
            "range": "0.053685-0.053685",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.082494,
            "range": "0.082494-0.082494",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.72998,
            "range": "0.703181-0.78158",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.00669,
            "range": "0.005869-0.00688",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.72331,
            "range": "0.696587-0.774896",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.004272,
            "range": "0.004074-0.004538",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.016722,
            "range": "0.016501-0.020925",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001247,
            "range": "0.001143-0.002495",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96",
          "message": "Merge pull request #88 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T13:50:19-08:00",
          "tree_id": "d0a5b6c3c8aa574bc58826f275ffe69ba62dbf34",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96"
        },
        "date": 1795297852869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.560359,
            "range": "0.543351-0.593461",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.285886,
            "range": "0.283789-0.294163",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.547091,
            "range": "0.547091-0.547091",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 342921216,
            "range": "337084416-343597056",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.103019,
            "range": "0.103019-0.103019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000402,
            "range": "0.000402-0.000402",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000408,
            "range": "0.000408-0.000408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001525,
            "range": "0.001525-0.001525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.00088,
            "range": "0.00088-0.00088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.01676,
            "range": "0.01676-0.01676",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.002558,
            "range": "0.002558-0.002558",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000355,
            "range": "0.000355-0.000355",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.00093,
            "range": "0.00093-0.00093",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.008768,
            "range": "0.008768-0.008768",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.004959,
            "range": "0.004959-0.004959",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.001989,
            "range": "0.001989-0.001989",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.004639,
            "range": "0.004639-0.004639",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.017641,
            "range": "0.017641-0.017641",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000479,
            "range": "0.000479-0.000479",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000899,
            "range": "0.000899-0.000899",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000706,
            "range": "0.000706-0.000706",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.003644,
            "range": "0.003644-0.003644",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.00534,
            "range": "0.00534-0.00534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.003551,
            "range": "0.003551-0.003551",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001587,
            "range": "0.001587-0.001587",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.004157,
            "range": "0.004157-0.004157",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000475,
            "range": "0.000475-0.000475",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000083,
            "range": "0.000083-0.000083",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.002737,
            "range": "0.002737-0.002737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001065,
            "range": "0.001065-0.001065",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.015007,
            "range": "0.015007-0.015007",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.00088,
            "range": "0.00088-0.00088",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.010517,
            "range": "0.010517-0.010517",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.105793,
            "range": "0.105793-0.105793",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.071929,
            "range": "0.071929-0.071929",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.034008,
            "range": "0.034008-0.034008",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001426,
            "range": "0.001426-0.001426",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000076,
            "range": "0.000076-0.000076",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.028244,
            "range": "0.028244-0.028244",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.062588,
            "range": "0.062588-0.062588",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.034545,
            "range": "0.034545-0.034545",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.099505,
            "range": "0.099505-0.099505",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.045818,
            "range": "0.045818-0.045818",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.018173,
            "range": "0.018173-0.018173",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.010568,
            "range": "0.010568-0.010568",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.001175,
            "range": "0.001175-0.001175",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.01469,
            "range": "0.01469-0.01469",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.018554,
            "range": "0.018554-0.018554",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda/load",
            "value": 0.978548,
            "range": "0.934774-1.041831",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.009018,
            "range": "0.008229-0.009071",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.969477,
            "range": "0.925756-1.033602",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.007607,
            "range": "0.007401-0.007616",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.021779,
            "range": "0.021509-0.024645",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001556,
            "range": "0.001526-0.003298",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96",
          "message": "Merge pull request #88 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:19Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96"
        },
        "date": 1795348861692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.535057,
            "range": "0.528314-0.546411",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.276828,
            "range": "0.269385-0.289378",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.534853,
            "range": "0.534853-0.534853",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 348954624,
            "range": "339607552-350756864",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.119129,
            "range": "0.119129-0.119129",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.0004,
            "range": "0.0004-0.0004",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000394,
            "range": "0.000394-0.000394",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001525,
            "range": "0.001525-0.001525",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000829,
            "range": "0.000829-0.000829",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.015958,
            "range": "0.015958-0.015958",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.002398,
            "range": "0.002398-0.002398",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000345,
            "range": "0.000345-0.000345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000811,
            "range": "0.000811-0.000811",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.007806,
            "range": "0.007806-0.007806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.005235,
            "range": "0.005235-0.005235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.002993,
            "range": "0.002993-0.002993",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.007323,
            "range": "0.007323-0.007323",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.014573,
            "range": "0.014573-0.014573",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000473,
            "range": "0.000473-0.000473",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000925,
            "range": "0.000925-0.000925",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000755,
            "range": "0.000755-0.000755",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.0035,
            "range": "0.0035-0.0035",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.004739,
            "range": "0.004739-0.004739",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.00327,
            "range": "0.00327-0.00327",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001419,
            "range": "0.001419-0.001419",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.003519,
            "range": "0.003519-0.003519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000732,
            "range": "0.000732-0.000732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000121,
            "range": "0.000121-0.000121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.004188,
            "range": "0.004188-0.004188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001804,
            "range": "0.001804-0.001804",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.01584,
            "range": "0.01584-0.01584",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000461,
            "range": "0.000461-0.000461",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.01059,
            "range": "0.01059-0.01059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.121876,
            "range": "0.121876-0.121876",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.068186,
            "range": "0.068186-0.068186",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.030727,
            "range": "0.030727-0.030727",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001394,
            "range": "0.001394-0.001394",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000099,
            "range": "0.000099-0.000099",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.027126,
            "range": "0.027126-0.027126",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.061309,
            "range": "0.061309-0.061309",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.020218,
            "range": "0.020218-0.020218",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.099044,
            "range": "0.099044-0.099044",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.046658,
            "range": "0.046658-0.046658",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.017267,
            "range": "0.017267-0.017267",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.010645,
            "range": "0.010645-0.010645",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.001087,
            "range": "0.001087-0.001087",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.010719,
            "range": "0.010719-0.010719",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.018499,
            "range": "0.018499-0.018499",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.751969,
            "range": "1.749497-1.910691",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.375966,
            "range": "1.368241-1.3987",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.752098,
            "range": "1.752098-1.752098",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 352808960,
            "range": "348307456-451874816",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.34284,
            "range": "0.34284-0.34284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000994,
            "range": "0.000994-0.000994",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000894,
            "range": "0.000894-0.000894",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.001411,
            "range": "0.001411-0.001411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.002213,
            "range": "0.002213-0.002213",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.035639,
            "range": "0.035639-0.035639",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.008795,
            "range": "0.008795-0.008795",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000558,
            "range": "0.000558-0.000558",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.00277,
            "range": "0.00277-0.00277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.020675,
            "range": "0.020675-0.020675",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.012594,
            "range": "0.012594-0.012594",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.008159,
            "range": "0.008159-0.008159",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.020625,
            "range": "0.020625-0.020625",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.065019,
            "range": "0.065019-0.065019",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.001281,
            "range": "0.001281-0.001281",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.002523,
            "range": "0.002523-0.002523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.00121,
            "range": "0.00121-0.00121",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.010516,
            "range": "0.010516-0.010516",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.013079,
            "range": "0.013079-0.013079",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.008956,
            "range": "0.008956-0.008956",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.003937,
            "range": "0.003937-0.003937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.003856,
            "range": "0.003856-0.003856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.0009,
            "range": "0.0009-0.0009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000169,
            "range": "0.000169-0.000169",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.012568,
            "range": "0.012568-0.012568",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.004434,
            "range": "0.004434-0.004434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.062542,
            "range": "0.062542-0.062542",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001772,
            "range": "0.001772-0.001772",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.00688,
            "range": "0.00688-0.00688",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.351548,
            "range": "0.351548-0.351548",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.23123,
            "range": "0.23123-0.23123",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.096675,
            "range": "0.096675-0.096675",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.00093,
            "range": "0.00093-0.00093",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000089,
            "range": "0.000089-0.000089",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.068732,
            "range": "0.068732-0.068732",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.18308,
            "range": "0.18308-0.18308",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.265253,
            "range": "0.265253-0.265253",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.284393,
            "range": "0.284393-0.284393",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.135022,
            "range": "0.135022-0.135022",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.058636,
            "range": "0.058636-0.058636",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.006923,
            "range": "0.006923-0.006923",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.00257,
            "range": "0.00257-0.00257",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.026491,
            "range": "0.026491-0.026491",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.040526,
            "range": "0.040526-0.040526",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 3.796881,
            "range": "3.79491-3.808183",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 3.330668,
            "range": "3.32073-3.350953",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 3.784506,
            "range": "3.784506-3.784506",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 511455232,
            "range": "489177088-543363072",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.609976,
            "range": "0.609976-0.609976",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.007954,
            "range": "0.007954-0.007954",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.016188,
            "range": "0.016188-0.016188",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000513,
            "range": "0.000513-0.000513",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.00692,
            "range": "0.00692-0.00692",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.029809,
            "range": "0.029809-0.029809",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.007583,
            "range": "0.007583-0.007583",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000497,
            "range": "0.000497-0.000497",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.017797,
            "range": "0.017797-0.017797",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.039473,
            "range": "0.039473-0.039473",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.016031,
            "range": "0.016031-0.016031",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.017817,
            "range": "0.017817-0.017817",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.03366,
            "range": "0.03366-0.03366",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.154115,
            "range": "0.154115-0.154115",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.006131,
            "range": "0.006131-0.006131",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.006979,
            "range": "0.006979-0.006979",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.002059,
            "range": "0.002059-0.002059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.016137,
            "range": "0.016137-0.016137",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.015955,
            "range": "0.015955-0.015955",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.007721,
            "range": "0.007721-0.007721",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.021009,
            "range": "0.021009-0.021009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.062293,
            "range": "0.062293-0.062293",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000614,
            "range": "0.000614-0.000614",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000277,
            "range": "0.000277-0.000277",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.028355,
            "range": "0.028355-0.028355",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.007475,
            "range": "0.007475-0.007475",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.148169,
            "range": "0.148169-0.148169",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.003857,
            "range": "0.003857-0.003857",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.006919,
            "range": "0.006919-0.006919",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.636159,
            "range": "0.636159-0.636159",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.414092,
            "range": "0.414092-0.414092",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.146326,
            "range": "0.146326-0.146326",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.002137,
            "range": "0.002137-0.002137",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000093,
            "range": "0.000093-0.000093",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.130887,
            "range": "0.130887-0.130887",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.350858,
            "range": "0.350858-0.350858",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.892059,
            "range": "0.892059-0.892059",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.572596,
            "range": "0.572596-0.572596",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.348435,
            "range": "0.348435-0.348435",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.138871,
            "range": "0.138871-0.138871",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.006964,
            "range": "0.006964-0.006964",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.005519,
            "range": "0.005519-0.005519",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.067726,
            "range": "0.067726-0.067726",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.071782,
            "range": "0.071782-0.071782",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.95806,
            "range": "0.918472-0.985318",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.007571,
            "range": "0.007349-0.013669",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.950647,
            "range": "0.910823-0.977886",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.004434,
            "range": "0.004342-0.00474",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.022791,
            "range": "0.022425-0.028429",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001625,
            "range": "0.001305-0.003468",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96",
          "message": "Merge pull request #88 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:19Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96"
        },
        "date": 1795441374447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.58563,
            "range": "0.576336-0.672664",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.370615,
            "range": "0.308649-0.370962",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.602117,
            "range": "0.602117-0.602117",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 336318464,
            "range": "328249344-353419264",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.122082,
            "range": "0.122082-0.122082",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000376,
            "range": "0.000376-0.000376",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000358,
            "range": "0.000358-0.000358",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001493,
            "range": "0.001493-0.001493",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000934,
            "range": "0.000934-0.000934",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.016507,
            "range": "0.016507-0.016507",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.002463,
            "range": "0.002463-0.002463",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000339,
            "range": "0.000339-0.000339",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000933,
            "range": "0.000933-0.000933",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.008718,
            "range": "0.008718-0.008718",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.005892,
            "range": "0.005892-0.005892",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.003386,
            "range": "0.003386-0.003386",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.008433,
            "range": "0.008433-0.008433",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.029266,
            "range": "0.029266-0.029266",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000421,
            "range": "0.000421-0.000421",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000922,
            "range": "0.000922-0.000922",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000696,
            "range": "0.000696-0.000696",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.003416,
            "range": "0.003416-0.003416",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.005203,
            "range": "0.005203-0.005203",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.00348,
            "range": "0.00348-0.00348",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001523,
            "range": "0.001523-0.001523",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.003728,
            "range": "0.003728-0.003728",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000755,
            "range": "0.000755-0.000755",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000123,
            "range": "0.000123-0.000123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.004669,
            "range": "0.004669-0.004669",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.00172,
            "range": "0.00172-0.00172",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.020748,
            "range": "0.020748-0.020748",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000806,
            "range": "0.000806-0.000806",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.010798,
            "range": "0.010798-0.010798",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.125774,
            "range": "0.125774-0.125774",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.07561,
            "range": "0.07561-0.07561",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.034253,
            "range": "0.034253-0.034253",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001414,
            "range": "0.001414-0.001414",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000076,
            "range": "0.000076-0.000076",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.028806,
            "range": "0.028806-0.028806",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.079856,
            "range": "0.079856-0.079856",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.029168,
            "range": "0.029168-0.029168",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.11313,
            "range": "0.11313-0.11313",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.053246,
            "range": "0.053246-0.053246",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.018436,
            "range": "0.018436-0.018436",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.010853,
            "range": "0.010853-0.010853",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.001196,
            "range": "0.001196-0.001196",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.012423,
            "range": "0.012423-0.012423",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.017877,
            "range": "0.017877-0.017877",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.909895,
            "range": "1.902778-1.913091",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.522075,
            "range": "1.502512-1.527648",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.91246,
            "range": "1.91246-1.91246",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 430813184,
            "range": "384491520-443338752",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.386953,
            "range": "0.386953-0.386953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.001125,
            "range": "0.001125-0.001125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.00104,
            "range": "0.00104-0.00104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.00144,
            "range": "0.00144-0.00144",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.002814,
            "range": "0.002814-0.002814",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.039267,
            "range": "0.039267-0.039267",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.009539,
            "range": "0.009539-0.009539",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000453,
            "range": "0.000453-0.000453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002957,
            "range": "0.002957-0.002957",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.022074,
            "range": "0.022074-0.022074",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.014616,
            "range": "0.014616-0.014616",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.009953,
            "range": "0.009953-0.009953",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.022794,
            "range": "0.022794-0.022794",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.074583,
            "range": "0.074583-0.074583",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.001246,
            "range": "0.001246-0.001246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.00272,
            "range": "0.00272-0.00272",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.001286,
            "range": "0.001286-0.001286",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.009375,
            "range": "0.009375-0.009375",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.015621,
            "range": "0.015621-0.015621",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.01072,
            "range": "0.01072-0.01072",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.004866,
            "range": "0.004866-0.004866",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.004354,
            "range": "0.004354-0.004354",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.001124,
            "range": "0.001124-0.001124",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000176,
            "range": "0.000176-0.000176",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.014245,
            "range": "0.014245-0.014245",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.00541,
            "range": "0.00541-0.00541",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.074335,
            "range": "0.074335-0.074335",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.002167,
            "range": "0.002167-0.002167",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.00682,
            "range": "0.00682-0.00682",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.397089,
            "range": "0.397089-0.397089",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.244633,
            "range": "0.244633-0.244633",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.113842,
            "range": "0.113842-0.113842",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.000931,
            "range": "0.000931-0.000931",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000097,
            "range": "0.000097-0.000097",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.070141,
            "range": "0.070141-0.070141",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.204974,
            "range": "0.204974-0.204974",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.264858,
            "range": "0.264858-0.264858",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.300024,
            "range": "0.300024-0.300024",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.155791,
            "range": "0.155791-0.155791",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.06877,
            "range": "0.06877-0.06877",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.006869,
            "range": "0.006869-0.006869",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.002798,
            "range": "0.002798-0.002798",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.028632,
            "range": "0.028632-0.028632",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.053009,
            "range": "0.053009-0.053009",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 4.154199,
            "range": "4.136022-4.237295",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 3.66987,
            "range": "3.636782-3.679619",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 4.210358,
            "range": "4.210358-4.210358",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 494530560,
            "range": "468725760-542126080",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.715796,
            "range": "0.715796-0.715796",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.008854,
            "range": "0.008854-0.008854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.01885,
            "range": "0.01885-0.01885",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.001001,
            "range": "0.001001-0.001001",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.009808,
            "range": "0.009808-0.009808",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.029154,
            "range": "0.029154-0.029154",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.008949,
            "range": "0.008949-0.008949",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000558,
            "range": "0.000558-0.000558",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.021367,
            "range": "0.021367-0.021367",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.041493,
            "range": "0.041493-0.041493",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.019349,
            "range": "0.019349-0.019349",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.022543,
            "range": "0.022543-0.022543",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.040793,
            "range": "0.040793-0.040793",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.182522,
            "range": "0.182522-0.182522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.006976,
            "range": "0.006976-0.006976",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.007787,
            "range": "0.007787-0.007787",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.002308,
            "range": "0.002308-0.002308",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.016195,
            "range": "0.016195-0.016195",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.01851,
            "range": "0.01851-0.01851",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.009282,
            "range": "0.009282-0.009282",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.022166,
            "range": "0.022166-0.022166",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.071439,
            "range": "0.071439-0.071439",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000639,
            "range": "0.000639-0.000639",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000318,
            "range": "0.000318-0.000318",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.033384,
            "range": "0.033384-0.033384",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.008599,
            "range": "0.008599-0.008599",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.178217,
            "range": "0.178217-0.178217",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.004944,
            "range": "0.004944-0.004944",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.006836,
            "range": "0.006836-0.006836",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.742588,
            "range": "0.742588-0.742588",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.458001,
            "range": "0.458001-0.458001",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.162349,
            "range": "0.162349-0.162349",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.002184,
            "range": "0.002184-0.002184",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.00006,
            "range": "0.00006-0.00006",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.156298,
            "range": "0.156298-0.156298",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.408002,
            "range": "0.408002-0.408002",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.886149,
            "range": "0.886149-0.886149",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.640284,
            "range": "0.640284-0.640284",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.40463,
            "range": "0.40463-0.40463",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.156173,
            "range": "0.156173-0.156173",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.006877,
            "range": "0.006877-0.006877",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.006514,
            "range": "0.006514-0.006514",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.079357,
            "range": "0.079357-0.079357",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.100893,
            "range": "0.100893-0.100893",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 1.028184,
            "range": "0.97724-1.162562",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.009381,
            "range": "0.008518-0.016648",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 1.019054,
            "range": "0.966005-1.153518",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.007883,
            "range": "0.007686-0.008242",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.022443,
            "range": "0.022288-0.030647",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001828,
            "range": "0.001617-0.024057",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96",
          "message": "Merge pull request #88 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:19Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96"
        },
        "date": 1795529967370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.381745,
            "range": "0.381407-0.410819",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.210459,
            "range": "0.207054-0.212696",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.399317,
            "range": "0.399317-0.399317",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 353300480,
            "range": "342183936-365572096",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.085292,
            "range": "0.085292-0.085292",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000316,
            "range": "0.000316-0.000316",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000308,
            "range": "0.000308-0.000308",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001098,
            "range": "0.001098-0.001098",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000582,
            "range": "0.000582-0.000582",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.011442,
            "range": "0.011442-0.011442",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.001703,
            "range": "0.001703-0.001703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000242,
            "range": "0.000242-0.000242",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000559,
            "range": "0.000559-0.000559",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.005325,
            "range": "0.005325-0.005325",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.003707,
            "range": "0.003707-0.003707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.001996,
            "range": "0.001996-0.001996",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.005032,
            "range": "0.005032-0.005032",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.012383,
            "range": "0.012383-0.012383",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000414,
            "range": "0.000414-0.000414",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000735,
            "range": "0.000735-0.000735",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000609,
            "range": "0.000609-0.000609",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.005519,
            "range": "0.005519-0.005519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.005469,
            "range": "0.005469-0.005469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.002289,
            "range": "0.002289-0.002289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000977,
            "range": "0.000977-0.000977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.002468,
            "range": "0.002468-0.002468",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000527,
            "range": "0.000527-0.000527",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000087,
            "range": "0.000087-0.000087",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.003424,
            "range": "0.003424-0.003424",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.000729,
            "range": "0.000729-0.000729",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.01128,
            "range": "0.01128-0.01128",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000573,
            "range": "0.000573-0.000573",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007197,
            "range": "0.007197-0.007197",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.087496,
            "range": "0.087496-0.087496",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.049293,
            "range": "0.049293-0.049293",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.022652,
            "range": "0.022652-0.022652",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001121,
            "range": "0.001121-0.001121",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.00006,
            "range": "0.00006-0.00006",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.018385,
            "range": "0.018385-0.018385",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.045183,
            "range": "0.045183-0.045183",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.015201,
            "range": "0.015201-0.015201",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.073768,
            "range": "0.073768-0.073768",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.041616,
            "range": "0.041616-0.041616",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.015334,
            "range": "0.015334-0.015334",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.007238,
            "range": "0.007238-0.007238",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000802,
            "range": "0.000802-0.000802",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.007601,
            "range": "0.007601-0.007601",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.013566,
            "range": "0.013566-0.013566",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.353309,
            "range": "1.333006-1.355165",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.076485,
            "range": "1.070407-1.080361",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.332231,
            "range": "1.332231-1.332231",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 396828672,
            "range": "391380992-447340544",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.255895,
            "range": "0.255895-0.255895",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000807,
            "range": "0.000807-0.000807",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000677,
            "range": "0.000677-0.000677",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.00104,
            "range": "0.00104-0.00104",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001737,
            "range": "0.001737-0.001737",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.027718,
            "range": "0.027718-0.027718",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.004469,
            "range": "0.004469-0.004469",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000247,
            "range": "0.000247-0.000247",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002624,
            "range": "0.002624-0.002624",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.016048,
            "range": "0.016048-0.016048",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.009689,
            "range": "0.009689-0.009689",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.006847,
            "range": "0.006847-0.006847",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.015217,
            "range": "0.015217-0.015217",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.048869,
            "range": "0.048869-0.048869",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.001039,
            "range": "0.001039-0.001039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.001887,
            "range": "0.001887-0.001887",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.000935,
            "range": "0.000935-0.000935",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.006152,
            "range": "0.006152-0.006152",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.010206,
            "range": "0.010206-0.010206",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.006941,
            "range": "0.006941-0.006941",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.003207,
            "range": "0.003207-0.003207",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.002976,
            "range": "0.002976-0.002976",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.000734,
            "range": "0.000734-0.000734",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000125,
            "range": "0.000125-0.000125",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.009582,
            "range": "0.009582-0.009582",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.003344,
            "range": "0.003344-0.003344",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.050578,
            "range": "0.050578-0.050578",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001434,
            "range": "0.001434-0.001434",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.005059,
            "range": "0.005059-0.005059",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.26357,
            "range": "0.26357-0.26357",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.162705,
            "range": "0.162705-0.162705",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.070837,
            "range": "0.070837-0.070837",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.000753,
            "range": "0.000753-0.000753",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000051,
            "range": "0.000051-0.000051",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.046945,
            "range": "0.046945-0.046945",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.138002,
            "range": "0.138002-0.138002",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.221448,
            "range": "0.221448-0.221448",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.21686,
            "range": "0.21686-0.21686",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.104473,
            "range": "0.104473-0.104473",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.045361,
            "range": "0.045361-0.045361",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.005095,
            "range": "0.005095-0.005095",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.002249,
            "range": "0.002249-0.002249",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.020519,
            "range": "0.020519-0.020519",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.033366,
            "range": "0.033366-0.033366",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 2.989874,
            "range": "2.960178-2.999345",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.624233,
            "range": "2.607118-2.664566",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 2.994815,
            "range": "2.994815-2.994815",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 521486336,
            "range": "429551616-553492480",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.46445,
            "range": "0.46445-0.46445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.006185,
            "range": "0.006185-0.006185",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.012471,
            "range": "0.012471-0.012471",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000455,
            "range": "0.000455-0.000455",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.005269,
            "range": "0.005269-0.005269",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.022246,
            "range": "0.022246-0.022246",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.005797,
            "range": "0.005797-0.005797",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000356,
            "range": "0.000356-0.000356",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.013649,
            "range": "0.013649-0.013649",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.029767,
            "range": "0.029767-0.029767",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.012539,
            "range": "0.012539-0.012539",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.014099,
            "range": "0.014099-0.014099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.026158,
            "range": "0.026158-0.026158",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.117942,
            "range": "0.117942-0.117942",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.005198,
            "range": "0.005198-0.005198",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.005495,
            "range": "0.005495-0.005495",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.001636,
            "range": "0.001636-0.001636",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.010445,
            "range": "0.010445-0.010445",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.01225,
            "range": "0.01225-0.01225",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.005837,
            "range": "0.005837-0.005837",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.015126,
            "range": "0.015126-0.015126",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.04725,
            "range": "0.04725-0.04725",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.000522,
            "range": "0.000522-0.000522",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000226,
            "range": "0.000226-0.000226",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.020378,
            "range": "0.020378-0.020378",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.005909,
            "range": "0.005909-0.005909",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.114322,
            "range": "0.114322-0.114322",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.003589,
            "range": "0.003589-0.003589",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.005067,
            "range": "0.005067-0.005067",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.484252,
            "range": "0.484252-0.484252",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.312721,
            "range": "0.312721-0.312721",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.106886,
            "range": "0.106886-0.106886",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001762,
            "range": "0.001762-0.001762",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000055,
            "range": "0.000055-0.000055",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.100498,
            "range": "0.100498-0.100498",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.268772,
            "range": "0.268772-0.268772",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.791422,
            "range": "0.791422-0.791422",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.428792,
            "range": "0.428792-0.428792",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.264675,
            "range": "0.264675-0.264675",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.102072,
            "range": "0.102072-0.102072",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.005102,
            "range": "0.005102-0.005102",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.004432,
            "range": "0.004432-0.004432",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.048465,
            "range": "0.048465-0.048465",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.07491,
            "range": "0.07491-0.07491",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.697293,
            "range": "0.64759-0.7187",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005722,
            "range": "0.005591-0.006947",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.691679,
            "range": "0.641951-0.712953",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.003607,
            "range": "0.003493-0.003793",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.016796,
            "range": "0.016513-0.023088",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001152,
            "range": "0.001024-0.004703",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96",
          "message": "Merge pull request #88 from the-cascade-protocol/chore/org-addresses\n\nchore(org): addresses name the-cascade-protocol, not the personal account",
          "timestamp": "2026-11-21T21:50:19Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/0c6ffe52b3c3d2dcd0dfaf3f0b9e00b69bf2ba96"
        },
        "date": 1795613576110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.428053,
            "range": "0.426145-0.483233",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.251741,
            "range": "0.230291-0.252712",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.441614,
            "range": "0.441614-0.441614",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 352866304,
            "range": "342401024-359870464",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.090294,
            "range": "0.090294-0.090294",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000358,
            "range": "0.000358-0.000358",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.00034,
            "range": "0.00034-0.00034",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001344,
            "range": "0.001344-0.001344",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000744,
            "range": "0.000744-0.000744",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.013061,
            "range": "0.013061-0.013061",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.002114,
            "range": "0.002114-0.002114",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000298,
            "range": "0.000298-0.000298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000826,
            "range": "0.000826-0.000826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.006743,
            "range": "0.006743-0.006743",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.004695,
            "range": "0.004695-0.004695",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.002785,
            "range": "0.002785-0.002785",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.006456,
            "range": "0.006456-0.006456",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.020828,
            "range": "0.020828-0.020828",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000284,
            "range": "0.000284-0.000284",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000529,
            "range": "0.000529-0.000529",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000384,
            "range": "0.000384-0.000384",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.001703,
            "range": "0.001703-0.001703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.002807,
            "range": "0.002807-0.002807",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.001607,
            "range": "0.001607-0.001607",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000826,
            "range": "0.000826-0.000826",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.001854,
            "range": "0.001854-0.001854",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.00039,
            "range": "0.00039-0.00039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000072,
            "range": "0.000072-0.000072",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.002235,
            "range": "0.002235-0.002235",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.000815,
            "range": "0.000815-0.000815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.011726,
            "range": "0.011726-0.011726",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000698,
            "range": "0.000698-0.000698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007773,
            "range": "0.007773-0.007773",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.093606,
            "range": "0.093606-0.093606",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.058998,
            "range": "0.058998-0.058998",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.025581,
            "range": "0.025581-0.025581",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001223,
            "range": "0.001223-0.001223",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000086,
            "range": "0.000086-0.000086",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.022529,
            "range": "0.022529-0.022529",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.061248,
            "range": "0.061248-0.061248",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.024911,
            "range": "0.024911-0.024911",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.078341,
            "range": "0.078341-0.078341",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.029225,
            "range": "0.029225-0.029225",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.013014,
            "range": "0.013014-0.013014",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.007829,
            "range": "0.007829-0.007829",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000972,
            "range": "0.000972-0.000972",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.008887,
            "range": "0.008887-0.008887",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.015162,
            "range": "0.015162-0.015162",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.501458,
            "range": "1.490972-1.620918",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.211654,
            "range": "1.210054-1.224462",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.493515,
            "range": "1.493515-1.493515",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 404418560,
            "range": "382922752-404516864",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.306531,
            "range": "0.306531-0.306531",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000886,
            "range": "0.000886-0.000886",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000865,
            "range": "0.000865-0.000865",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.001166,
            "range": "0.001166-0.001166",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001895,
            "range": "0.001895-0.001895",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.031363,
            "range": "0.031363-0.031363",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.00756,
            "range": "0.00756-0.00756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000343,
            "range": "0.000343-0.000343",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002196,
            "range": "0.002196-0.002196",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.018197,
            "range": "0.018197-0.018197",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.011172,
            "range": "0.011172-0.011172",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.007485,
            "range": "0.007485-0.007485",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.017096,
            "range": "0.017096-0.017096",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.054856,
            "range": "0.054856-0.054856",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.001113,
            "range": "0.001113-0.001113",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.002342,
            "range": "0.002342-0.002342",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.001085,
            "range": "0.001085-0.001085",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.006968,
            "range": "0.006968-0.006968",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.012139,
            "range": "0.012139-0.012139",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.013071,
            "range": "0.013071-0.013071",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.005411,
            "range": "0.005411-0.005411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.003659,
            "range": "0.003659-0.003659",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.000923,
            "range": "0.000923-0.000923",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000163,
            "range": "0.000163-0.000163",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.011518,
            "range": "0.011518-0.011518",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.004103,
            "range": "0.004103-0.004103",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.058812,
            "range": "0.058812-0.058812",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001736,
            "range": "0.001736-0.001736",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.005503,
            "range": "0.005503-0.005503",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.314355,
            "range": "0.314355-0.314355",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.176407,
            "range": "0.176407-0.176407",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.075073,
            "range": "0.075073-0.075073",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.000818,
            "range": "0.000818-0.000818",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000053,
            "range": "0.000053-0.000053",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.056089,
            "range": "0.056089-0.056089",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.157043,
            "range": "0.157043-0.157043",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.229794,
            "range": "0.229794-0.229794",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.224972,
            "range": "0.224972-0.224972",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.130574,
            "range": "0.130574-0.130574",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.052518,
            "range": "0.052518-0.052518",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.005569,
            "range": "0.005569-0.005569",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.00249,
            "range": "0.00249-0.00249",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.0227,
            "range": "0.0227-0.0227",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.045059,
            "range": "0.045059-0.045059",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 3.344108,
            "range": "3.32516-3.364387",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.997094,
            "range": "2.945901-3.026363",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 3.511793,
            "range": "3.511793-3.511793",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 449294336,
            "range": "442785792-507588608",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.578547,
            "range": "0.578547-0.578547",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.007842,
            "range": "0.007842-0.007842",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.015068,
            "range": "0.015068-0.015068",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000515,
            "range": "0.000515-0.000515",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.005943,
            "range": "0.005943-0.005943",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.023983,
            "range": "0.023983-0.023983",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.007504,
            "range": "0.007504-0.007504",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000467,
            "range": "0.000467-0.000467",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.01704,
            "range": "0.01704-0.01704",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.034853,
            "range": "0.034853-0.034853",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.015978,
            "range": "0.015978-0.015978",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.018534,
            "range": "0.018534-0.018534",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.030649,
            "range": "0.030649-0.030649",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.140865,
            "range": "0.140865-0.140865",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.005829,
            "range": "0.005829-0.005829",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.006057,
            "range": "0.006057-0.006057",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.001911,
            "range": "0.001911-0.001911",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.012543,
            "range": "0.012543-0.012543",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.015679,
            "range": "0.015679-0.015679",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.007879,
            "range": "0.007879-0.007879",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.016929,
            "range": "0.016929-0.016929",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.058123,
            "range": "0.058123-0.058123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.00054,
            "range": "0.00054-0.00054",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000297,
            "range": "0.000297-0.000297",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.027304,
            "range": "0.027304-0.027304",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.00693,
            "range": "0.00693-0.00693",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.143983,
            "range": "0.143983-0.143983",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.004175,
            "range": "0.004175-0.004175",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.005477,
            "range": "0.005477-0.005477",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.600415,
            "range": "0.600415-0.600415",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.390018,
            "range": "0.390018-0.390018",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.127322,
            "range": "0.127322-0.127322",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001949,
            "range": "0.001949-0.001949",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.00006,
            "range": "0.00006-0.00006",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.130971,
            "range": "0.130971-0.130971",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.321393,
            "range": "0.321393-0.321393",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.792913,
            "range": "0.792913-0.792913",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.534715,
            "range": "0.534715-0.534715",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.328082,
            "range": "0.328082-0.328082",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.123541,
            "range": "0.123541-0.123541",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.005514,
            "range": "0.005514-0.005514",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.004816,
            "range": "0.004816-0.004816",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.059371,
            "range": "0.059371-0.059371",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.090716,
            "range": "0.090716-0.090716",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.80229,
            "range": "0.746386-0.85222",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.007719,
            "range": "0.006718-0.009627",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.79457,
            "range": "0.739018-0.845436",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.004095,
            "range": "0.003939-0.00519",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.017196,
            "range": "0.016698-0.020272",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001399,
            "range": "0.001224-0.003132",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jayostis@gmail.com",
            "name": "jayostis",
            "username": "jayostis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2f88968bbc81c839cf34d03a175da40791013e6",
          "message": "Merge pull request #89 from the-cascade-protocol/chore/no-decision-note-pointers\n\nchore: remove pointers to the vocabulary's deleted decision notes",
          "timestamp": "2026-11-25T14:37:00-08:00",
          "tree_id": "d44104870979af4fda949f72ffc26a42fd61fab1",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/b2f88968bbc81c839cf34d03a175da40791013e6"
        },
        "date": 1795646256784,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.564221,
            "range": "0.554643-0.564975",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.293518,
            "range": "0.291196-0.297855",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.647761,
            "range": "0.647761-0.647761",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 361365504,
            "range": "346181632-363925504",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.151648,
            "range": "0.151648-0.151648",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.00039,
            "range": "0.00039-0.00039",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000388,
            "range": "0.000388-0.000388",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001486,
            "range": "0.001486-0.001486",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000847,
            "range": "0.000847-0.000847",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.015977,
            "range": "0.015977-0.015977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.002411,
            "range": "0.002411-0.002411",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000344,
            "range": "0.000344-0.000344",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.0009,
            "range": "0.0009-0.0009",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.008191,
            "range": "0.008191-0.008191",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.005605,
            "range": "0.005605-0.005605",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.003109,
            "range": "0.003109-0.003109",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.007482,
            "range": "0.007482-0.007482",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.026703,
            "range": "0.026703-0.026703",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000458,
            "range": "0.000458-0.000458",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000937,
            "range": "0.000937-0.000937",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000756,
            "range": "0.000756-0.000756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.003716,
            "range": "0.003716-0.003716",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.005537,
            "range": "0.005537-0.005537",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.00362,
            "range": "0.00362-0.00362",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.001761,
            "range": "0.001761-0.001761",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.003815,
            "range": "0.003815-0.003815",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000764,
            "range": "0.000764-0.000764",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000155,
            "range": "0.000155-0.000155",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.004771,
            "range": "0.004771-0.004771",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.001758,
            "range": "0.001758-0.001758",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.024729,
            "range": "0.024729-0.024729",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000529,
            "range": "0.000529-0.000529",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.010928,
            "range": "0.010928-0.010928",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.155134,
            "range": "0.155134-0.155134",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.089296,
            "range": "0.089296-0.089296",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.038274,
            "range": "0.038274-0.038274",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.001352,
            "range": "0.001352-0.001352",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000072,
            "range": "0.000072-0.000072",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.028104,
            "range": "0.028104-0.028104",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.074554,
            "range": "0.074554-0.074554",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.036734,
            "range": "0.036734-0.036734",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.103728,
            "range": "0.103728-0.103728",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.058711,
            "range": "0.058711-0.058711",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.01815,
            "range": "0.01815-0.01815",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.010984,
            "range": "0.010984-0.010984",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.001207,
            "range": "0.001207-0.001207",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.012423,
            "range": "0.012423-0.012423",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.019038,
            "range": "0.019038-0.019038",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda/load",
            "value": 1.001255,
            "range": "0.968235-1.00239",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.008938,
            "range": "0.008367-0.009036",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.992317,
            "range": "0.9592-0.994023",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.007663,
            "range": "0.007654-0.007676",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.022155,
            "range": "0.021389-0.025114",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001827,
            "range": "0.001676-0.003217",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jayostis",
            "username": "jayostis",
            "email": "jayostis@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b2f88968bbc81c839cf34d03a175da40791013e6",
          "message": "Merge pull request #89 from the-cascade-protocol/chore/no-decision-note-pointers\n\nchore: remove pointers to the vocabulary's deleted decision notes",
          "timestamp": "2026-11-25T22:37:00Z",
          "url": "https://github.com/the-cascade-protocol/cascade-bridge-adapter-ccda/commit/b2f88968bbc81c839cf34d03a175da40791013e6"
        },
        "date": 1795698800259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ccda-entries-x10/convert/first",
            "value": 0.37192,
            "range": "0.358498-0.392537",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 10 times, as one document. sha256 77454794ba3cf02cf329e249f7a4a1874ca58cd0761d4f5622163ea9e85efa0e, 138124 bytes"
          },
          {
            "name": "ccda-entries-x10/convert/second",
            "value": 0.198416,
            "range": "0.196575-0.203182",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x10/convert/profiled",
            "value": 0.388282,
            "range": "0.388282-0.388282",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/first",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x10/wasm-memory/second",
            "value": 52625408,
            "range": "52625408-52625408",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x10/rss",
            "value": 362606592,
            "range": "336478208-363474944",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x10/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 10 times, as one document."
          },
          {
            "name": "ccda-entries-x10/triples",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x10/findings",
            "value": 93,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x10/query-time/document-table.rq",
            "value": 0.086393,
            "range": "0.086393-0.086393",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy.rq",
            "value": 0.000289,
            "range": "0.000289-0.000289",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition.rq",
            "value": 0.000288,
            "range": "0.000288-0.000288",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-organizations.rq",
            "value": 0.001016,
            "range": "0.001016-0.001016",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/immunization.rq",
            "value": 0.000593,
            "range": "0.000593-0.000593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication.rq",
            "value": 0.011613,
            "range": "0.011613-0.011613",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/note-or-document.rq",
            "value": 0.001698,
            "range": "0.001698-0.001698",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient.rq",
            "value": 0.000236,
            "range": "0.000236-0.000236",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/procedure.rq",
            "value": 0.000613,
            "range": "0.000613-0.000613",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/record.rq",
            "value": 0.005001,
            "range": "0.005001-0.005001",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report.rq",
            "value": 0.003707,
            "range": "0.003707-0.003707",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-identifiers.rq",
            "value": 0.001989,
            "range": "0.001989-0.001989",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-quantities.rq",
            "value": 0.004892,
            "range": "0.004892-0.004892",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result.rq",
            "value": 0.012069,
            "range": "0.012069-0.012069",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/allergy-findings.rq",
            "value": 0.000342,
            "range": "0.000342-0.000342",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/condition-findings.rq",
            "value": 0.000576,
            "range": "0.000576-0.000576",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/document-findings.rq",
            "value": 0.000513,
            "range": "0.000513-0.000513",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-findings.rq",
            "value": 0.002345,
            "range": "0.002345-0.002345",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/entry-statement-findings.rq",
            "value": 0.003461,
            "range": "0.003461-0.003461",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/medication-findings.rq",
            "value": 0.002256,
            "range": "0.002256-0.002256",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/name-findings.rq",
            "value": 0.000977,
            "range": "0.000977-0.000977",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/narrative-findings.rq",
            "value": 0.0055,
            "range": "0.0055-0.0055",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/organization-findings.rq",
            "value": 0.000508,
            "range": "0.000508-0.000508",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/patient-findings.rq",
            "value": 0.000099,
            "range": "0.000099-0.000099",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/reference-findings.rq",
            "value": 0.006452,
            "range": "0.006452-0.006452",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/report-and-note-findings.rq",
            "value": 0.00123,
            "range": "0.00123-0.00123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/result-findings.rq",
            "value": 0.013429,
            "range": "0.013429-0.013429",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/section-findings.rq",
            "value": 0.000337,
            "range": "0.000337-0.000337",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/query-time/detect.rq",
            "value": 0.007123,
            "range": "0.007123-0.007123",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x10/stage/document-table",
            "value": 0.088637,
            "range": "0.088637-0.088637",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x10/stage/lift",
            "value": 0.049817,
            "range": "0.049817-0.049817",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x10/stage/source-validation",
            "value": 0.021789,
            "range": "0.021789-0.021789",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x10/stage/accounting",
            "value": 0.000955,
            "range": "0.000955-0.000955",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x10/stage/dataset",
            "value": 0.000057,
            "range": "0.000057-0.000057",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x10/stage/index",
            "value": 0.017597,
            "range": "0.017597-0.017597",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x10/stage/mapping",
            "value": 0.044523,
            "range": "0.044523-0.044523",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x10/stage/records",
            "value": 0.014678,
            "range": "0.014678-0.014678",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x10/stage/output-validation",
            "value": 0.064433,
            "range": "0.064433-0.064433",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x10/stage/findings",
            "value": 0.041299,
            "range": "0.041299-0.041299",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x10/stage/unresolved-addresses",
            "value": 0.016193,
            "range": "0.016193-0.016193",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x10/stage/detect",
            "value": 0.007161,
            "range": "0.007161-0.007161",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x10/stage/summary",
            "value": 0.000673,
            "range": "0.000673-0.000673",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x10/stage/serialising",
            "value": 0.007366,
            "range": "0.007366-0.007366",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x10/stage/unaccounted",
            "value": 0.013103,
            "range": "0.013103-0.013103",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x10/output/graph",
            "value": 1926,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 ad5fa27c4fe8b29ebed8c8892c3bf3df74f202365f5e14dca5a7981d130dfc16"
          },
          {
            "name": "ccda-entries-x10/output/findings",
            "value": 1210,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 54d67a6028e2259b4049f60782c6f8e43760fe11362f49b9d8e8dc308de0ce74"
          },
          {
            "name": "ccda-entries-x50/convert/first",
            "value": 1.316319,
            "range": "1.309318-1.321337",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. The C-CDA medications-and-results example with its entries repeated 50 times, as one document. sha256 74d7ceb7fbc39145ce2f7d8c2aca5f71848dc80ced2ebbdf76ed795b43ba7f62, 667684 bytes"
          },
          {
            "name": "ccda-entries-x50/convert/second",
            "value": 1.028237,
            "range": "1.020582-1.036422",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-entries-x50/convert/profiled",
            "value": 1.313132,
            "range": "1.313132-1.313132",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/first",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-entries-x50/wasm-memory/second",
            "value": 136511488,
            "range": "136511488-136511488",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-entries-x50/rss",
            "value": 349933568,
            "range": "345731072-361832448",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-entries-x50/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. The C-CDA medications-and-results example with its entries repeated 50 times, as one document."
          },
          {
            "name": "ccda-entries-x50/triples",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-entries-x50/findings",
            "value": 453,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-entries-x50/query-time/document-table.rq",
            "value": 0.254298,
            "range": "0.254298-0.254298",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy.rq",
            "value": 0.000786,
            "range": "0.000786-0.000786",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition.rq",
            "value": 0.000664,
            "range": "0.000664-0.000664",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-organizations.rq",
            "value": 0.000968,
            "range": "0.000968-0.000968",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/immunization.rq",
            "value": 0.001593,
            "range": "0.001593-0.001593",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication.rq",
            "value": 0.026756,
            "range": "0.026756-0.026756",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/note-or-document.rq",
            "value": 0.005631,
            "range": "0.005631-0.005631",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient.rq",
            "value": 0.000248,
            "range": "0.000248-0.000248",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/procedure.rq",
            "value": 0.002552,
            "range": "0.002552-0.002552",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/record.rq",
            "value": 0.015709,
            "range": "0.015709-0.015709",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report.rq",
            "value": 0.009397,
            "range": "0.009397-0.009397",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-identifiers.rq",
            "value": 0.006453,
            "range": "0.006453-0.006453",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-quantities.rq",
            "value": 0.015921,
            "range": "0.015921-0.015921",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result.rq",
            "value": 0.048415,
            "range": "0.048415-0.048415",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/allergy-findings.rq",
            "value": 0.000987,
            "range": "0.000987-0.000987",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/condition-findings.rq",
            "value": 0.002065,
            "range": "0.002065-0.002065",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/document-findings.rq",
            "value": 0.000931,
            "range": "0.000931-0.000931",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-findings.rq",
            "value": 0.007713,
            "range": "0.007713-0.007713",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/entry-statement-findings.rq",
            "value": 0.010092,
            "range": "0.010092-0.010092",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/medication-findings.rq",
            "value": 0.006873,
            "range": "0.006873-0.006873",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/name-findings.rq",
            "value": 0.00311,
            "range": "0.00311-0.00311",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/narrative-findings.rq",
            "value": 0.003002,
            "range": "0.003002-0.003002",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/organization-findings.rq",
            "value": 0.000731,
            "range": "0.000731-0.000731",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/patient-findings.rq",
            "value": 0.000128,
            "range": "0.000128-0.000128",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/reference-findings.rq",
            "value": 0.009343,
            "range": "0.009343-0.009343",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/report-and-note-findings.rq",
            "value": 0.003317,
            "range": "0.003317-0.003317",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/result-findings.rq",
            "value": 0.049633,
            "range": "0.049633-0.049633",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/section-findings.rq",
            "value": 0.001287,
            "range": "0.001287-0.001287",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/query-time/detect.rq",
            "value": 0.004964,
            "range": "0.004964-0.004964",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-entries-x50/stage/document-table",
            "value": 0.260162,
            "range": "0.260162-0.260162",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-entries-x50/stage/lift",
            "value": 0.154812,
            "range": "0.154812-0.154812",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-entries-x50/stage/source-validation",
            "value": 0.070327,
            "range": "0.070327-0.070327",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-entries-x50/stage/accounting",
            "value": 0.000681,
            "range": "0.000681-0.000681",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-entries-x50/stage/dataset",
            "value": 0.000057,
            "range": "0.000057-0.000057",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-entries-x50/stage/index",
            "value": 0.043541,
            "range": "0.043541-0.043541",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-entries-x50/stage/mapping",
            "value": 0.136661,
            "range": "0.136661-0.136661",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-entries-x50/stage/records",
            "value": 0.224679,
            "range": "0.224679-0.224679",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-entries-x50/stage/output-validation",
            "value": 0.208204,
            "range": "0.208204-0.208204",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-entries-x50/stage/findings",
            "value": 0.104267,
            "range": "0.104267-0.104267",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-entries-x50/stage/unresolved-addresses",
            "value": 0.042172,
            "range": "0.042172-0.042172",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-entries-x50/stage/detect",
            "value": 0.004993,
            "range": "0.004993-0.004993",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-entries-x50/stage/summary",
            "value": 0.001762,
            "range": "0.001762-0.001762",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-entries-x50/stage/serialising",
            "value": 0.01913,
            "range": "0.01913-0.01913",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-entries-x50/stage/unaccounted",
            "value": 0.041685,
            "range": "0.041685-0.041685",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-entries-x50/output/graph",
            "value": 9126,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 139d803f26e008902033b2b0e3393b1c53073557b209e9222053dbf3e93d0bfc"
          },
          {
            "name": "ccda-entries-x50/output/findings",
            "value": 5890,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 dc8c2917e358ee8ffbb751b8d416fb1827233ea00e53ae5c25be3b9d2d911b03"
          },
          {
            "name": "ccda-synthea-10y/convert/first",
            "value": 2.866601,
            "range": "2.81759-2.87394",
            "unit": "s",
            "extra": "Seconds the first convert of a fresh process takes, timed without the step-by-step breakdown. A caller that opens an adapter and converts once also waits for the engine to start (the boot rows) and the adapter to load (the load rows), which this does not count. Ten years of one Synthea person as a single C-CDA document. sha256 643c55e2e3db4e52974cdf202b7a9a2f0f1bcf72e47a64414e014ae8c1ccd361, 1226024 bytes"
          },
          {
            "name": "ccda-synthea-10y/convert/second",
            "value": 2.510102,
            "range": "2.499255-2.548193",
            "unit": "s",
            "extra": "Seconds a second convert of the same document takes in the same process, timed without the step-by-step breakdown: the warm cost."
          },
          {
            "name": "ccda-synthea-10y/convert/profiled",
            "value": 2.868452,
            "range": "2.868452-2.868452",
            "unit": "s",
            "extra": "Seconds of the one convert run with the step-by-step breakdown on, from which the stage and query rows are read. The breakdown makes it slower than a plain convert."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/first",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the first convert is done."
          },
          {
            "name": "ccda-synthea-10y/wasm-memory/second",
            "value": 237174784,
            "range": "237174784-237174784",
            "unit": "By",
            "extra": "Bytes of memory the engine holds once the second convert is done."
          },
          {
            "name": "ccda-synthea-10y/rss",
            "value": 516087808,
            "range": "498479104-550457344",
            "unit": "By",
            "extra": "Peak memory the whole process held in RAM, in bytes: the engine's start, the adapter's load and both converts all count."
          },
          {
            "name": "ccda-synthea-10y/records",
            "value": 1,
            "unit": "{count}",
            "extra": "Source records the Bridge found in the document and converted. Ten years of one Synthea person as a single C-CDA document."
          },
          {
            "name": "ccda-synthea-10y/triples",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph."
          },
          {
            "name": "ccda-synthea-10y/findings",
            "value": 1234,
            "unit": "{count}",
            "extra": "Findings the conversion wrote."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-table.rq",
            "value": 0.446273,
            "range": "0.446273-0.446273",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy.rq",
            "value": 0.00591,
            "range": "0.00591-0.00591",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition.rq",
            "value": 0.011443,
            "range": "0.011443-0.011443",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-organizations.rq",
            "value": 0.000408,
            "range": "0.000408-0.000408",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/immunization.rq",
            "value": 0.004462,
            "range": "0.004462-0.004462",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication.rq",
            "value": 0.020597,
            "range": "0.020597-0.020597",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/note-or-document.rq",
            "value": 0.00574,
            "range": "0.00574-0.00574",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient.rq",
            "value": 0.000365,
            "range": "0.000365-0.000365",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/procedure.rq",
            "value": 0.01314,
            "range": "0.01314-0.01314",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/record.rq",
            "value": 0.028776,
            "range": "0.028776-0.028776",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report.rq",
            "value": 0.011992,
            "range": "0.011992-0.011992",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-identifiers.rq",
            "value": 0.013162,
            "range": "0.013162-0.013162",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-quantities.rq",
            "value": 0.025483,
            "range": "0.025483-0.025483",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result.rq",
            "value": 0.116075,
            "range": "0.116075-0.116075",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/allergy-findings.rq",
            "value": 0.00498,
            "range": "0.00498-0.00498",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/condition-findings.rq",
            "value": 0.005291,
            "range": "0.005291-0.005291",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/document-findings.rq",
            "value": 0.001569,
            "range": "0.001569-0.001569",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-findings.rq",
            "value": 0.012086,
            "range": "0.012086-0.012086",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/entry-statement-findings.rq",
            "value": 0.011867,
            "range": "0.011867-0.011867",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/medication-findings.rq",
            "value": 0.005732,
            "range": "0.005732-0.005732",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/name-findings.rq",
            "value": 0.009519,
            "range": "0.009519-0.009519",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/narrative-findings.rq",
            "value": 0.044877,
            "range": "0.044877-0.044877",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/organization-findings.rq",
            "value": 0.00042,
            "range": "0.00042-0.00042",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/patient-findings.rq",
            "value": 0.000212,
            "range": "0.000212-0.000212",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/reference-findings.rq",
            "value": 0.018716,
            "range": "0.018716-0.018716",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/report-and-note-findings.rq",
            "value": 0.005264,
            "range": "0.005264-0.005264",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/result-findings.rq",
            "value": 0.111153,
            "range": "0.111153-0.111153",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/section-findings.rq",
            "value": 0.002618,
            "range": "0.002618-0.002618",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/query-time/detect.rq",
            "value": 0.005008,
            "range": "0.005008-0.005008",
            "unit": "s",
            "extra": "Seconds one of the adapter's queries took, summed over every record it ran on, in the profiled convert."
          },
          {
            "name": "ccda-synthea-10y/stage/document-table",
            "value": 0.464251,
            "range": "0.464251-0.464251",
            "unit": "s",
            "extra": "Running the adapter's document-table query on every record of the document, to link a record to any other record, in the document or not. (Specification stage: link records.)"
          },
          {
            "name": "ccda-synthea-10y/stage/lift",
            "value": 0.306437,
            "range": "0.306437-0.306437",
            "unit": "s",
            "extra": "Reading the source document into the triples the adapter's queries can ask about, one record at a time. (Specification stage: read and chunk.)"
          },
          {
            "name": "ccda-synthea-10y/stage/source-validation",
            "value": 0.106616,
            "range": "0.106616-0.106616",
            "unit": "s",
            "extra": "Checking each source record, and the document as a whole where the adapter gives a document schema, against the adapter's schema (XSD or JSON Schema). A failure is a finding, never a refusal. (Specification stage: check, validate.)"
          },
          {
            "name": "ccda-synthea-10y/stage/accounting",
            "value": 0.001503,
            "range": "0.001503-0.001503",
            "unit": "s",
            "extra": "Working out, against the adapter's accounting file, what became of each part of each source record."
          },
          {
            "name": "ccda-synthea-10y/stage/dataset",
            "value": 0.000061,
            "range": "0.000061-0.000061",
            "unit": "s",
            "extra": "Putting the facts about a record into the store its queries run over."
          },
          {
            "name": "ccda-synthea-10y/stage/index",
            "value": 0.090119,
            "range": "0.090119-0.090119",
            "unit": "s",
            "extra": "Building the lookup structure that compiled queries read, from a record's triples. A query the general evaluator answers needs none."
          },
          {
            "name": "ccda-synthea-10y/stage/mapping",
            "value": 0.259308,
            "range": "0.259308-0.259308",
            "unit": "s",
            "extra": "Running the adapter's mapping queries on each record, without the time of building their lookup structure. (Specification stage: transform.)"
          },
          {
            "name": "ccda-synthea-10y/stage/records",
            "value": 0.779479,
            "range": "0.779479-0.779479",
            "unit": "s",
            "extra": "Turning what the mapping produced into each record's graph: naming its versions, keeping one where the mapping wrote several, and writing their arrivals. (Specification stage: name versions, write arrivals.)"
          },
          {
            "name": "ccda-synthea-10y/stage/output-validation",
            "value": 0.399884,
            "range": "0.399884-0.399884",
            "unit": "s",
            "extra": "Checking each record's output against the vocabulary's SHACL shapes."
          },
          {
            "name": "ccda-synthea-10y/stage/findings",
            "value": 0.248653,
            "range": "0.248653-0.248653",
            "unit": "s",
            "extra": "Running the adapter's findings queries to find what the source record got wrong or left out. (Specification stage: findings.)"
          },
          {
            "name": "ccda-synthea-10y/stage/unresolved-addresses",
            "value": 0.101564,
            "range": "0.101564-0.101564",
            "unit": "s",
            "extra": "Finding the references to records the document does not hold, which keep their computed names."
          },
          {
            "name": "ccda-synthea-10y/stage/detect",
            "value": 0.005038,
            "range": "0.005038-0.005038",
            "unit": "s",
            "extra": "Running the adapter's detect query, which reports whether the adapter reads this document. The Bridge converts every record whatever the answer; it never routes."
          },
          {
            "name": "ccda-synthea-10y/stage/summary",
            "value": 0.003773,
            "range": "0.003773-0.003773",
            "unit": "s",
            "extra": "Counting the graph's distinct triples and the findings once every record is done."
          },
          {
            "name": "ccda-synthea-10y/stage/serialising",
            "value": 0.048435,
            "range": "0.048435-0.048435",
            "unit": "s",
            "extra": "Writing the graph and the findings out as Turtle or N-Triples."
          },
          {
            "name": "ccda-synthea-10y/stage/unaccounted",
            "value": 0.05333,
            "range": "0.05333-0.05333",
            "unit": "s",
            "extra": "Seconds of the profiled convert that none of the stages accounts for, such as writing the document and the import into the graph."
          },
          {
            "name": "ccda-synthea-10y/output/graph",
            "value": 21772,
            "unit": "{count}",
            "extra": "Distinct triples in the output graph, with a SHA-256 fingerprint of the output that is the same whenever the content is the same, whatever order the engine wrote it in and whatever it named its blank nodes. sha256 4c682c9d7746d30c8e5fd69e73f2e02378d0d2906267d583be3e5c817fd47817"
          },
          {
            "name": "ccda-synthea-10y/output/findings",
            "value": 16083,
            "unit": "{count}",
            "extra": "Distinct triples in the findings, with a SHA-256 fingerprint of them that is the same whenever the content is the same, whatever order the engine wrote them in and whatever it named its blank nodes. sha256 4221904ec50da3c9e16bf98c6659cc3722a491747b9df87e8ea8b45ae9327a5e"
          },
          {
            "name": "ccda/load",
            "value": 0.664686,
            "range": "0.638191-0.690322",
            "unit": "s",
            "extra": "Seconds to read the adapter's and the vocabulary's files, describe the adapter and prepare it, with the engine already started."
          },
          {
            "name": "ccda/load/read-files",
            "value": 0.005359,
            "range": "0.005138-0.006364",
            "unit": "s",
            "extra": "Seconds of the load spent reading files from disk."
          },
          {
            "name": "ccda/load/prepare",
            "value": 0.659309,
            "range": "0.631827-0.685066",
            "unit": "s",
            "extra": "Seconds of the load spent describing the adapter and preparing it: parsing and compiling its queries, schemas and shapes."
          },
          {
            "name": "ccda/boot/read-wasm",
            "value": 0.003193,
            "range": "0.002852-0.003284",
            "unit": "s",
            "extra": "Seconds to read the engine's compiled code from disk."
          },
          {
            "name": "ccda/boot/compile-wasm",
            "value": 0.016327,
            "range": "0.015542-0.023975",
            "unit": "s",
            "extra": "Seconds to turn the engine's compiled code into something the machine can run."
          },
          {
            "name": "ccda/boot/instantiate-wasm",
            "value": 0.001091,
            "range": "0.000917-0.004371",
            "unit": "s",
            "extra": "Seconds to start the compiled code, which runs its start-up work."
          }
        ]
      }
    ]
  }
}
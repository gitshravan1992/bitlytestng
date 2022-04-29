$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/bitlyapi.feature");
formatter.feature({
  "name": "To test services in https://bitly.com",
  "description": "Prereq: User has created an account in bitly and also created several links",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test following methods",
  "description": "\t\t\tGET/groups/{group_guid}\n\t\t\tGET/groups/{group_guid}/bitlinks/{sort}\n\t\t\tPOST/bitlinks",
  "keyword": "Scenario"
});
formatter.scenarioOutline({
  "name": "To validate status code of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.step({
  "name": "user retrieves response status code as \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "response"
      ]
    },
    {
      "cells": [
        "invalid",
        "403"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate status code of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"invalid\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 403",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate status code of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate response body of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.step({
  "name": "user retrieves all details for a group",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates whether json body \"\u003ckey\u003e\" has value \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "key",
        "value"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "guid",
        "Bm4n5pZfPiT"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "name",
        "shravanbitly"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "is_active",
        "true"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate response body of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves all details for a group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.retreiveDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"guid\" has value \"Bm4n5pZfPiT\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate response body of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves all details for a group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.retreiveDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"name\" has value \"shravanbitly\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate response body of  GET/groups/{group_guid}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves all details for a group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.retreiveDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"is_active\" has value \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate status code of  GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.step({
  "name": "user retrieves response status code as \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "response"
      ]
    },
    {
      "cells": [
        "invalid",
        "403"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate status code of  GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"invalid\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getSortGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 403",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate status code of  GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getSortGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validates response body of GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.step({
  "name": "user gets list of bitlinks sorted by group",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates whether json body \"\u003ckey\u003e\" has value \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "key",
        "value"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "sorted_links.id",
        "[bit.ly/3L8ojHm, bit.ly/3xTcl0J, bit.ly/3vwyizy]"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "sorted_links.clicks",
        "[2, 1, 1]"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validates response body of GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getSortGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets list of bitlinks sorted by group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateResponse_Sort()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"sorted_links.id\" has value \"[bit.ly/3L8ojHm, bit.ly/3xTcl0J, bit.ly/3vwyizy]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validates response body of GET/groups/{group_guid}/bitlinks/{sort}",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs  GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.getSortGroups()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets list of bitlinks sorted by group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateResponse_Sort()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"sorted_links.clicks\" has value \"[2, 1, 1]\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate status code of  POST/bitlinks when body is not entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.step({
  "name": "user retrieves response status code as \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "response"
      ]
    },
    {
      "cells": [
        "invalid",
        "403"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "422"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate status code of  POST/bitlinks when body is not entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"invalid\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 403",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate status code of  POST/bitlinks when body is not entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate status code of  POST/bitlinks when body is entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user has entered json body with below contents",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "long_url",
        "https://www.elsevier.com/en-in"
      ]
    },
    {
      "cells": [
        "domain",
        "bit.ly"
      ]
    },
    {
      "cells": [
        "title",
        "Elsevier"
      ]
    }
  ]
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.step({
  "name": "user retrieves response status code as \u003cresponse\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "response"
      ]
    },
    {
      "cells": [
        "invalid",
        "403"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate status code of  POST/bitlinks when body is entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"invalid\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has entered json body with below contents",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.setBodyjson(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 403",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate status code of  POST/bitlinks when body is entered",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has entered json body with below contents",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.setBodyjson(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user retrieves response status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate response body of  POST/bitlinks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"\u003ctoken\u003e\" token for Authorization",
  "keyword": "Given "
});
formatter.step({
  "name": "user has entered json body with below contents",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "long_url",
        "https://www.elsevier.com/en-in"
      ]
    },
    {
      "cells": [
        "domain",
        "bit.ly"
      ]
    },
    {
      "cells": [
        "title",
        "Elsevier"
      ]
    }
  ]
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.step({
  "name": "a bitlink is created",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates whether json body \"\u003ckey\u003e\" has value \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "token",
        "key",
        "value"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "long_url",
        "https://www.elsevier.com/en-in"
      ]
    },
    {
      "cells": [
        "ee5bc095f2c67d11c579b9750dd6fcef64bfe554",
        "title",
        "Elsevier"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate response body of  POST/bitlinks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has entered json body with below contents",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.setBodyjson(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a bitlink is created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.creationBitlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"long_url\" has value \"https://www.elsevier.com/en-in\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate response body of  POST/bitlinks",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has generated \"ee5bc095f2c67d11c579b9750dd6fcef64bfe554\" token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.stepsdef.authorization(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has entered json body with below contents",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.setBodyjson(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user performs POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.stepsdef.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a bitlink is created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.stepsdef.creationBitlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates whether json body \"title\" has value \"Elsevier\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.stepsdef.validateDetails(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
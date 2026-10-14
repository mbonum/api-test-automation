# Test clients per case (EA-ST)

Extracted 2026-10-14 with skill `clienti-test-per-stato` (one random client per case, it + es). Clean cases (active … signing_up, mai_iscritta, mai_pagante) are not hidden, blacklisted or linked.

> EA-ST is restored from production every Monday (~07:18): re-check an ID before use with `estrai.sh -i <escort_id>`. Passwords are real production ones and are deliberately not stored here; get one with `estrai.sh -i <escort_id>`.

| # | case | country | real state | phone | escort_id | expires | started | hidden | blacklist | linked | paying | sub. purchases | total in case |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | active | it | active | 3342799640 | 141619 | 2026-11-02 | 2026-10-04 |  |  | 0 | si | 7 | 2012 |
| 1 | expired | it | expired | 3338853221 | 20634 | 2020-12-15 |  |  |  | 0 | si | 0 | 14508 |
| 2 | suspended | it | suspended | 3896246691 | 101242 | 2026-10-14 | 2026-10-11 |  |  | 0 | si | 49 | 50 |
| 3 | signed_up | it | signed_up | 3471670359 | 44688 |  |  |  |  | 0 | no | 0 | 13824 |
| 4 | signing_up | it | signing_up | 780937120 | 149849 |  |  |  |  | 0 | no | 0 | 10367 |
| 5 | hidden | it | signed_up | 3512883995 | 50692 |  |  | L1 |  | 1 | no | 0 | 36510 |
| 6 | bloccata | it | expired | 3511139118 | 35801 | 2020-03-18 |  |  | Decisione team EA | 0 | si | 0 | 29639 |
| 7 | collegata | it | expired | 3496160124 | 52143 | 2021-07-06 |  |  |  | 6 | no | 0 | 17903 |
| 8 | mai_iscritta | it | mai_iscritta | 3661573951 | 0 |  |  |  |  | 0 |  | 0 | 15067 |
| 9 | mai_pagante | it | signing_up | 3298964990 | 82701 |  |  |  |  | 0 | no | 0 | 24939 |
| 10 | active | es | active | 627295789 | 150146 | 2026-11-03 | 2026-10-05 |  |  | 0 | si | 2 | 110 |
| 11 | expired | es | expired | 655337067 | 30941 | 2019-09-25 |  |  |  | 0 | si | 0 | 2908 |
| 12 | suspended | es | suspended | 682572505 | 102476 | 2026-10-17 | 2026-07-17 |  |  | 0 | si | 29 | 1 |
| 13 | signed_up | es | signed_up | 624844565 | 119425 |  |  |  |  | 0 | no | 0 | 7618 |
| 14 | signing_up | es | signing_up | 615011762 | 26599 |  |  |  |  | 0 | no | 0 | 2776 |
| 15 | hidden | es | expired | 611264812 | 136961 | 2025-12-18 | 2025-11-18 | L1 |  | 0 | si | 1 | 666 |
| 16 | bloccata | es | signed_up | 652227127 | 100667 |  |  |  | Decisione team EA | 0 | no | 0 | 4479 |
| 17 | collegata | es | signed_up | 611297152 | 137593 |  |  |  |  | 2 | no | 0 | 2968 |
| 18 | mai_iscritta | es | mai_iscritta | 642448175 | 0 |  |  |  |  | 0 |  | 0 | 26888 |
| 19 | mai_pagante | es | signing_up | 624194452 | 114139 |  |  |  |  | 0 | no | 0 | 10696 |

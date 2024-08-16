import type { HttpClient } from "@shlinkio/shlink-js-sdk";
import { ShlinkApiClient } from "@shlinkio/shlink-js-sdk";

const demoData = {
  visits: {
    data: [
      {
        referer: "",
        date: "2024-08-15T20:51:09+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-08-13T19:22:54+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-06T18:45:23+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://eph.me/cv",
        date: "2024-08-04T05:10:02+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36 OPR/35.0.2066.37 (Edition Yx 01)",
        visitLocation: {
          countryCode: "LU",
          countryName: "Luxembourg",
          timezone: "Europe/Luxembourg",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-02T12:18:57+00:00",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "GB",
          countryName: "United Kingdom",
          timezone: "Europe/London",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-02T02:56:33+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "SG",
          countryName: "Singapore",
          timezone: "Asia/Singapore",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-02T00:41:24+00:00",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        visitLocation: {
          countryCode: "GB",
          countryName: "United Kingdom",
          timezone: "Europe/London",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T23:49:44+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-08-01T23:34:38+00:00",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T23:08:28+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:56:32+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:50:46+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Chicago",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:43:45+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:41:36+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:34:51+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "TH",
          countryName: "Thailand",
          timezone: "Asia/Bangkok",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-08-01T22:25:04+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 14; Pixel 6a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:21:52+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-08-01T22:20:07+00:00",
        userAgent:
          "MetaInspector/5.6.0 (+https://github.com/jaimeiniesta/metainspector)",
        visitLocation: {
          countryCode: "IE",
          countryName: "Ireland",
          timezone: "Europe/Dublin",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-08-01T22:19:58+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-08-01T22:19:56+00:00",
        userAgent:
          "Mozilla/5.0 (Android 14; Mobile; rv:128.0) Gecko/128.0 Firefox/128.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Chicago",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-07-11T04:49:44+00:00",
        userAgent: "python-requests/2.31.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "",
        date: "2024-07-11T04:44:47+00:00",
        userAgent: "python-requests/2.31.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "",
        date: "2024-07-10T09:26:39+00:00",
        userAgent: "python-requests/2.32.3",
        visitLocation: {
          countryCode: "FR",
          countryName: "France",
          timezone: "Europe/Paris",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-29T10:01:54+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:128.0) Gecko/20100101 Firefox/128.0",
        visitLocation: {
          countryCode: "GB",
          countryName: "United Kingdom",
          timezone: "Europe/London",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-12T17:19:27+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "SG",
          countryName: "Singapore",
          timezone: "Asia/Singapore",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-12T10:22:02+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "GB",
          countryName: "United Kingdom",
          timezone: "Europe/London",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-11T11:56:42+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.47",
        visitLocation: {
          countryCode: "SG",
          countryName: "Singapore",
          timezone: "Asia/Singapore",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-07T20:37:45+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "SG",
          countryName: "Singapore",
          timezone: "Asia/Singapore",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-07T15:46:10+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-07T15:14:37+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-05T20:53:12+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-05T19:42:06+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Chicago",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-05T15:04:53+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)",
        visitLocation: {
          countryCode: "SG",
          countryName: "Singapore",
          timezone: "Asia/Singapore",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-05T14:27:46+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-05T14:24:43+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-04T19:06:08+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T15:20:38+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T10:09:57+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "NG",
          countryName: "Nigeria",
          timezone: "Africa/Lagos",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T08:31:57+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T07:06:28+00:00",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Denver",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T01:47:56+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-04T01:06:39+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T22:55:48+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T22:24:15+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T22:14:29+00:00",
        userAgent: "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T22:10:23+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T19:36:11+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
        visitLocation: {
          countryCode: "FI",
          countryName: "Finland",
          timezone: "Europe/Helsinki",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T18:55:16+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
        visitLocation: {
          countryCode: "AU",
          countryName: "Australia",
          timezone: "Australia/Sydney",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T18:03:37+00:00",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "FI",
          countryName: "Finland",
          timezone: "Europe/Helsinki",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T18:01:01+00:00",
        userAgent:
          "Mozilla/5.0 (Android 14; Mobile; rv:109.0) Gecko/119.0 Firefox/119.0",
        visitLocation: {
          countryCode: "IN",
          countryName: "India",
          timezone: "Asia/Kolkata",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:47:35+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Chicago",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:45:24+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:44:45+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:43:24+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:39:32+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "GB",
          countryName: "United Kingdom",
          timezone: "Europe/London",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T17:38:27+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "DE",
          countryName: "Germany",
          timezone: "Europe/Berlin",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:38:25+00:00",
        userAgent:
          "Mozilla/5.0 (Android 14; Mobile; rv:128.0) Gecko/128.0 Firefox/128.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:35:01+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:34:47+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:34:33+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:34:20+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:33:11+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:33:09+00:00",
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
        visitLocation: {
          countryCode: "DE",
          countryName: "Germany",
          timezone: "Europe/Berlin",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:32:37+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:127.0) Gecko/20100101 Firefox/127.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/New_York",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:32:28+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T17:32:15+00:00",
        userAgent:
          "MetaInspector/5.6.0 (+https://github.com/jaimeiniesta/metainspector)",
        visitLocation: {
          countryCode: "IE",
          countryName: "Ireland",
          timezone: "Europe/Dublin",
          isEmpty: false,
        },
        potentialBot: true,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:32:12+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Phoenix",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:31:37+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T17:31:12+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "US",
          countryName: "United States",
          timezone: "America/Los_Angeles",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:31:09+00:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        visitLocation: {
          countryCode: "SE",
          countryName: "Sweden",
          timezone: "Europe/Stockholm",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T17:31:07+00:00",
        userAgent:
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
        visitLocation: {
          countryCode: "DE",
          countryName: "Germany",
          timezone: "Europe/Berlin",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "https://news.ycombinator.com/",
        date: "2024-06-03T17:29:37+00:00",
        userAgent:
          "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0",
        visitLocation: {
          countryCode: "TR",
          countryName: "Türkiye",
          timezone: "Europe/Istanbul",
          isEmpty: false,
        },
        potentialBot: false,
      },
      {
        referer: "",
        date: "2024-06-03T17:29:26+00:00",
        userAgent:
          "Mozilla/5.0 (Android 14; Mobile; rv:126.0) Gecko/126.0 Firefox/126.0",
        visitLocation: {
          countryCode: "RO",
          countryName: "Romania",
          timezone: "Europe/Bucharest",
          isEmpty: false,
        },
        potentialBot: false,
      },
    ],
    pagination: {
      currentPage: 1,
      pagesCount: 1,
      itemsPerPage: 73,
      itemsInCurrentPage: 73,
      totalItems: 73,
    },
  },
};

function countProp<T>(list: Array<T>, filter: (item: T) => string): { key: string, count: number }[] {
	const grouped = Object.groupBy(list, filter);
	return Object.keys(grouped).map(key => ({ key, count: grouped[key]?.length ?? 0 }));
}

export async function getLinkInfo(shortCode: string) {
	await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate slow server fetch
	const linkData = demoData; // await fetch data from server

	return {
		hitsAllTime: linkData.visits.pagination.totalItems,
		referrers: countProp(linkData.visits.data, ({ referer }) => referer),
		countries: countProp(linkData.visits.data, ({ visitLocation }) => visitLocation.countryName),
		raw: demoData.visits.data,
	};
}
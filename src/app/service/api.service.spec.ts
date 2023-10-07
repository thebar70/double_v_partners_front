import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const userListMock = {
  "total_count": 143967,
  "incomplete_results": false,
  "items": [
    {
      "login": "juan",
      "id": 12437,
      "node_id": "MDQ6VXNlcjEyNDM3",
      "avatar_url": "https://avatars.githubusercontent.com/u/12437?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juan",
      "html_url": "https://github.com/juan",
      "followers_url": "https://api.github.com/users/juan/followers",
      "following_url": "https://api.github.com/users/juan/following{/other_user}",
      "gists_url": "https://api.github.com/users/juan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juan/subscriptions",
      "organizations_url": "https://api.github.com/users/juan/orgs",
      "repos_url": "https://api.github.com/users/juan/repos",
      "events_url": "https://api.github.com/users/juan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juan/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "jbenet",
      "id": 138401,
      "node_id": "MDQ6VXNlcjEzODQwMQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/138401?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jbenet",
      "html_url": "https://github.com/jbenet",
      "followers_url": "https://api.github.com/users/jbenet/followers",
      "following_url": "https://api.github.com/users/jbenet/following{/other_user}",
      "gists_url": "https://api.github.com/users/jbenet/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jbenet/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jbenet/subscriptions",
      "organizations_url": "https://api.github.com/users/jbenet/orgs",
      "repos_url": "https://api.github.com/users/jbenet/repos",
      "events_url": "https://api.github.com/users/jbenet/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jbenet/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "JuanitoFatas",
      "id": 1000669,
      "node_id": "MDQ6VXNlcjEwMDA2Njk=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1000669?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/JuanitoFatas",
      "html_url": "https://github.com/JuanitoFatas",
      "followers_url": "https://api.github.com/users/JuanitoFatas/followers",
      "following_url": "https://api.github.com/users/JuanitoFatas/following{/other_user}",
      "gists_url": "https://api.github.com/users/JuanitoFatas/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/JuanitoFatas/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/JuanitoFatas/subscriptions",
      "organizations_url": "https://api.github.com/users/JuanitoFatas/orgs",
      "repos_url": "https://api.github.com/users/JuanitoFatas/repos",
      "events_url": "https://api.github.com/users/JuanitoFatas/events{/privacy}",
      "received_events_url": "https://api.github.com/users/JuanitoFatas/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "juandc",
      "id": 15987317,
      "node_id": "MDQ6VXNlcjE1OTg3MzE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/15987317?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juandc",
      "html_url": "https://github.com/juandc",
      "followers_url": "https://api.github.com/users/juandc/followers",
      "following_url": "https://api.github.com/users/juandc/following{/other_user}",
      "gists_url": "https://api.github.com/users/juandc/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juandc/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juandc/subscriptions",
      "organizations_url": "https://api.github.com/users/juandc/orgs",
      "repos_url": "https://api.github.com/users/juandc/repos",
      "events_url": "https://api.github.com/users/juandc/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juandc/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "JuanBindez",
      "id": 79322362,
      "node_id": "MDQ6VXNlcjc5MzIyMzYy",
      "avatar_url": "https://avatars.githubusercontent.com/u/79322362?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/JuanBindez",
      "html_url": "https://github.com/JuanBindez",
      "followers_url": "https://api.github.com/users/JuanBindez/followers",
      "following_url": "https://api.github.com/users/JuanBindez/following{/other_user}",
      "gists_url": "https://api.github.com/users/JuanBindez/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/JuanBindez/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/JuanBindez/subscriptions",
      "organizations_url": "https://api.github.com/users/JuanBindez/orgs",
      "repos_url": "https://api.github.com/users/JuanBindez/repos",
      "events_url": "https://api.github.com/users/JuanBindez/events{/privacy}",
      "received_events_url": "https://api.github.com/users/JuanBindez/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "juanfranblanco",
      "id": 562371,
      "node_id": "MDQ6VXNlcjU2MjM3MQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/562371?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juanfranblanco",
      "html_url": "https://github.com/juanfranblanco",
      "followers_url": "https://api.github.com/users/juanfranblanco/followers",
      "following_url": "https://api.github.com/users/juanfranblanco/following{/other_user}",
      "gists_url": "https://api.github.com/users/juanfranblanco/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juanfranblanco/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juanfranblanco/subscriptions",
      "organizations_url": "https://api.github.com/users/juanfranblanco/orgs",
      "repos_url": "https://api.github.com/users/juanfranblanco/repos",
      "events_url": "https://api.github.com/users/juanfranblanco/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juanfranblanco/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "juanpflores",
      "id": 6200135,
      "node_id": "MDQ6VXNlcjYyMDAxMzU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/6200135?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juanpflores",
      "html_url": "https://github.com/juanpflores",
      "followers_url": "https://api.github.com/users/juanpflores/followers",
      "following_url": "https://api.github.com/users/juanpflores/following{/other_user}",
      "gists_url": "https://api.github.com/users/juanpflores/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juanpflores/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juanpflores/subscriptions",
      "organizations_url": "https://api.github.com/users/juanpflores/orgs",
      "repos_url": "https://api.github.com/users/juanpflores/repos",
      "events_url": "https://api.github.com/users/juanpflores/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juanpflores/received_events",
      "type": "User",
      "site_admin": true,
      "score": 1.0
    },
    {
      "login": "juanplopes",
      "id": 74924,
      "node_id": "MDQ6VXNlcjc0OTI0",
      "avatar_url": "https://avatars.githubusercontent.com/u/74924?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juanplopes",
      "html_url": "https://github.com/juanplopes",
      "followers_url": "https://api.github.com/users/juanplopes/followers",
      "following_url": "https://api.github.com/users/juanplopes/following{/other_user}",
      "gists_url": "https://api.github.com/users/juanplopes/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juanplopes/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juanplopes/subscriptions",
      "organizations_url": "https://api.github.com/users/juanplopes/orgs",
      "repos_url": "https://api.github.com/users/juanplopes/repos",
      "events_url": "https://api.github.com/users/juanplopes/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juanplopes/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Juanpe",
      "id": 1409041,
      "node_id": "MDQ6VXNlcjE0MDkwNDE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1409041?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Juanpe",
      "html_url": "https://github.com/Juanpe",
      "followers_url": "https://api.github.com/users/Juanpe/followers",
      "following_url": "https://api.github.com/users/Juanpe/following{/other_user}",
      "gists_url": "https://api.github.com/users/Juanpe/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Juanpe/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Juanpe/subscriptions",
      "organizations_url": "https://api.github.com/users/Juanpe/orgs",
      "repos_url": "https://api.github.com/users/Juanpe/repos",
      "events_url": "https://api.github.com/users/Juanpe/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Juanpe/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "juanpicado",
      "id": 558752,
      "node_id": "MDQ6VXNlcjU1ODc1Mg==",
      "avatar_url": "https://avatars.githubusercontent.com/u/558752?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juanpicado",
      "html_url": "https://github.com/juanpicado",
      "followers_url": "https://api.github.com/users/juanpicado/followers",
      "following_url": "https://api.github.com/users/juanpicado/following{/other_user}",
      "gists_url": "https://api.github.com/users/juanpicado/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juanpicado/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juanpicado/subscriptions",
      "organizations_url": "https://api.github.com/users/juanpicado/orgs",
      "repos_url": "https://api.github.com/users/juanpicado/repos",
      "events_url": "https://api.github.com/users/juanpicado/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juanpicado/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ]
};

const httpClientMock = {
  get: jest.fn(),
}

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: HttpClient, useValue: httpClientMock }],
    });
    service = TestBed.inject(ApiService);
    httpClientMock.get.mockReturnValue(userListMock);
  });

  it('search return userList', (done) => {
    httpClientMock.get.mockReturnValue(of(userListMock));
    service.search('dummy').then(res => {
      expect(res.items.length).toBe(10);
      done();
    });
  });

  it('getUser return user data', (done) => {
    httpClientMock.get.mockReturnValue(of(userListMock['items'][0]));
    const expectedRes = {
      "login": "juan",
      "id": 12437,
      "node_id": "MDQ6VXNlcjEyNDM3",
      "avatar_url": "https://avatars.githubusercontent.com/u/12437?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/juan",
      "html_url": "https://github.com/juan",
      "followers_url": "https://api.github.com/users/juan/followers",
      "following_url": "https://api.github.com/users/juan/following{/other_user}",
      "gists_url": "https://api.github.com/users/juan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/juan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/juan/subscriptions",
      "organizations_url": "https://api.github.com/users/juan/orgs",
      "repos_url": "https://api.github.com/users/juan/repos",
      "events_url": "https://api.github.com/users/juan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/juan/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    };
    service.getUser('dummy').subscribe(res => {
      expect(res).toEqual(expectedRes);
      done();
    });
  });
});

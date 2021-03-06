input {
  stdin { }
  http {
    port => 8080
  }
  tcp {
    port => 514
    type => syslog
  }
  udp {
    port => 514
    type => syslog
  }
}

output {
  elasticsearch { hosts => ["elasticsearch:9200"] }
}

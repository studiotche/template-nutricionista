# SiteClientV2 landing template

Template Astro para landing pages publicadas pelo Prospecta Leads. O build consome exclusivamente `src/data/client.json` no schema `SiteClientV2` aprovado; não há conteúdo de cliente, serviço, credencial, localização ou depoimento como fallback.

- Seções vazias não são renderizadas.
- Reviews aceitas precisam ter `source: google` e `evidenceId`.
- Canonical, robots, sitemap, assets e JSON-LD vêm do manifesto determinístico do servidor.
- O deploy é disparado uma única vez por `push`.

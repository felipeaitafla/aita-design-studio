"use client";

import { useEffect, useRef, useState, Fragment } from "react";

// ─── Design tokens ──────────────────────────────────────────────
const C = {
  bg:    "#000000",
  s1:    "#111111",
  s2:    "#1a1a1a",
  s3:    "#222222",
  b1:    "#2a2a2a",
  b2:    "#333333",
  t1:    "#ffffff",
  t2:    "#a0a0a0",
  t3:    "#808080",
  mono:  "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, monospace",
  green: { bg: "#1f4d23", border: "#2e6e34", text: "#7ecf86" },
};

// ─── Nav items ──────────────────────────────────────────────────
const NAV = [
  { id: "s1", n: "01", label: "Acessando o painel" },
  { id: "s2", n: "02", label: "Criando um artigo" },
  { id: "s3", n: "03", label: "Escrevendo o conteúdo" },
  { id: "s4", n: "04", label: "Publicando" },
  { id: "s5", n: "05", label: "Editando artigos" },
  { id: "s6", n: "06", label: "Dúvidas frequentes" },
];

// ─── Helpers ────────────────────────────────────────────────────

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: C.mono, fontSize: 12, background: C.s3,
      border: `1px solid ${C.b2}`, color: C.t2,
      padding: "1px 6px", borderRadius: 3, whiteSpace: "nowrap", display: "inline-block",
    }}>
      {children}
    </span>
  );
}

function StepBlock({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "24px 1fr", gap: 14,
      padding: "13px 14px", background: C.s1, borderBottom: `1px solid ${C.b1}`, alignItems: "start",
    }}>
      <span style={{ fontFamily: C.mono, fontSize: 12, color: C.t3, paddingTop: 2, textAlign: "right" }}>{n}</span>
      <div style={{ fontSize: 15, color: C.t2, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 6, overflow: "hidden" }}>
      {children}
    </div>
  );
}

function StepSub({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 12, color: C.t3, marginTop: 3, fontWeight: 300 }}>{children}</p>;
}

function Tip({ children, warning }: { children: React.ReactNode; warning?: boolean }) {
  return (
    <div style={{
      borderLeft: `2px solid ${warning ? "#5a3a00" : C.b2}`,
      padding: "11px 14px", fontSize: 13,
      color: warning ? "#888" : C.t3,
      lineHeight: 1.6, marginTop: 12, background: C.s1,
      borderRadius: "0 5px 5px 0", fontWeight: 300,
    }}>
      {children}
    </div>
  );
}

function ImgSlot({ src, alt, label }: { src?: string; alt?: string; label: string }) {
  if (src) {
    return (
      <div style={{ borderRadius: 6, overflow: "hidden", flexShrink: 0, width: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt || label} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
    );
  }
  return (
    <div style={{
      aspectRatio: "4/3", background: C.s1, border: `1px dashed ${C.b2}`,
      borderRadius: 6, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 8, flexShrink: 0,
    }}>
      <div style={{
        width: 36, height: 36, border: `1px solid ${C.b2}`, borderRadius: 6,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16, color: C.t3, background: C.s2,
      }}>⌗</div>
      <p style={{
        fontFamily: C.mono, fontSize: 12, color: C.t3,
        textAlign: "center", lineHeight: 1.6, padding: "0 1rem",
      }}>{label}</p>
    </div>
  );
}

// ─── Section wrapper ────────────────────────────────────────────
interface SectionImage {
  src?: string;
  label: string;
  alt?: string;
}

function Section({
  id, n, title, imageLabel, imageSrc, images, onHoverImage, children,
}: {
  id: string;
  n: string;
  title: string;
  imageLabel?: string;
  imageSrc?: string;
  images?: SectionImage[];
  onHoverImage?: (img: SectionImage | null) => void;
  children: React.ReactNode;
}) {
  const imageList: SectionImage[] = images || (imageLabel || imageSrc ? [{ src: imageSrc, label: imageLabel || "", alt: imageLabel }] : []);

  return (
    <section
      id={id}
      data-reveal="true"
      style={{
        borderTop: `1px solid ${C.b1}`,
        padding: "3rem 0",
        opacity: 0, transform: "translateY(14px)",
        transition: "opacity .45s ease, transform .45s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: "2rem" }}>
        <span style={{ fontFamily: C.mono, fontSize: 12, color: C.t3, letterSpacing: ".1em" }}>{n}</span>
        <h2 style={{ fontSize: 20, fontWeight: 500, color: C.t1, letterSpacing: "-.01em" }}>{title}</h2>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}>
        <div>{children}</div>
        {imageList.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <p style={{
              fontSize: 12,
              color: C.t3,
              fontStyle: "italic",
              margin: 0,
              letterSpacing: "0.02em",
            }}>
              <span className="tut-desktop-hint">Passe o mouse em cima para ampliar</span>
              <span className="tut-mobile-hint">Aperte na imagem para ampliar</span>
            </p>
            <div
              className="tut-images-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                width: "100%",
              }}
            >
              {imageList.map((img, index) => (
                <Fragment key={index}>
                  {index > 0 && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.t3}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tut-arrow"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      cursor: img.src ? "zoom-in" : "default",
                    }}
                    onMouseEnter={() => {
                      if (img.src && onHoverImage) {
                        onHoverImage(img);
                      }
                    }}
                    onMouseLeave={() => {
                      if (onHoverImage) {
                        onHoverImage(null);
                      }
                    }}
                  >
                    <ImgSlot src={img.src} label={img.label} alt={img.alt} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Main component ─────────────────────────────────────────────
export default function TutorialClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>("s1");
  const [hoveredImage, setHoveredImage] = useState<SectionImage | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scroll reveal
    const revealIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.06 },
    );
    container.querySelectorAll("[data-reveal]").forEach((el) => revealIO.observe(el));

    // Active nav
    const navIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      }),
      { threshold: 0.35 },
    );
    container.querySelectorAll("section[id]").forEach((s) => navIO.observe(s));

    return () => { revealIO.disconnect(); navIO.disconnect(); };
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const fmtKeys = [
    { key: "B", label: "Negrito" },
    { key: "I", label: "Itálico" },
    { key: "H1", label: "Heading 1" },
    { key: "H3", label: "Heading 3" },
    { key: "↵", label: "Novo parágrafo" },
  ];

  const faqItems = [
    {
      q: "O artigo não apareceu no site.",
      a: "Aguarde 1–2 minutos e atualize a página. Se persistir, entre em contato.",
    },
    {
      q: "Quero salvar um rascunho sem publicar.",
      a: "Basta fechar a janela após preencher os campos. O Sanity salva automaticamente — o artigo só vai ao ar quando você clicar em Publish.",
    },
    {
      q: "Posso editar um artigo depois de publicado?",
      a: (<>Sim. Acesse o artigo pela listagem de <Pill>Post</Pill>, faça as alterações e clique em <strong style={{ color: C.t1 }}>Publish</strong> novamente para aplicar as mudanças.</>),
    },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        overflowY: "auto", background: C.bg, color: C.t1,
        fontFamily: "var(--font-funnel-sans), 'Funnel Sans', Inter, sans-serif",
        fontSize: 14, lineHeight: 1.6,
      }}
    >
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 2rem" }}>
        <main style={{ minWidth: 0 }}>

          {/* Hero */}
          <section style={{ padding: "6rem 0 3.5rem 0", animation: "tutFadeUp .5s ease both" }}>
            <p style={{
              fontFamily: C.mono, fontSize: 12, letterSpacing: ".14em",
              textTransform: "uppercase", color: C.t3, marginBottom: "1.25rem",
            }}>
              Guia de uso · Sanity Studio
            </p>
            <h1 style={{ fontSize: 42, fontWeight: 300, lineHeight: 1.15, color: C.t1, marginBottom: "1rem", letterSpacing: "-.02em" }}>
              Como publicar<br />artigos no blog
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: C.t2, lineHeight: 1.65, maxWidth: 520 }}>
              Passo a passo para criar, formatar e publicar conteúdo pelo painel do Sanity Studio — sem precisar de conhecimento técnico.
            </p>
          </section>

            {/* 01 — Acessando o painel */}
            <Section
              id="s1"
              n="01"
              title="Acessando o painel"
              onHoverImage={setHoveredImage}
              images={[
                { src: "/sanity/step-1/1.1.webp", label: "Acessar link do Studio" },
                { src: "/sanity/step-1/1.2.webp", label: "Inserir e-mail e senha" },
              ]}
            >
              <Steps>
                <StepBlock n={1}>
                  Abra o navegador e acesse o endereço do seu Sanity Studio
                  <StepSub>O link foi enviado junto com suas credenciais de acesso</StepSub>
                </StepBlock>
                <StepBlock n={2}>
                  Faça login com o <strong style={{ color: C.t1 }}>e-mail</strong> e <strong style={{ color: C.t1 }}>senha</strong> que você recebeu
                </StepBlock>
                <StepBlock n={3}>
                  Você verá o painel do Sanity Studio — é aqui que todo o conteúdo do blog é gerenciado
                </StepBlock>
              </Steps>
            </Section>

            {/* 02 — Criando um novo artigo */}
            <Section
              id="s2"
              n="02"
              title="Criando um novo artigo"
              onHoverImage={setHoveredImage}
              images={[
                { src: "/sanity/step-2/2.1.webp", label: "Menu Post no painel" },
                { src: "/sanity/step-2/2.2.webp", label: "Criar novo documento" },
              ]}
            >
              <Steps>
                <StepBlock n={1}>
                  No menu lateral esquerdo, clique em <Pill>Post</Pill>
                </StepBlock>
                <StepBlock n={2}>
                  Clique no botão <Pill>+</Pill> no canto superior
                </StepBlock>
                <StepBlock n={3}>
                  A partir daqui você pode começar a preencher os campos
                </StepBlock>
              </Steps>
            </Section>

            {/* 03 — Escrevendo o conteúdo */}
            <Section
              id="s3"
              n="03"
              title="Escrevendo o conteúdo"
              onHoverImage={setHoveredImage}
              images={[
                { src: "/sanity/step-3/3.1.webp", label: "Campo Conteúdo no editor" },
                { src: "/sanity/step-3/3.2.webp", label: "Formatação do texto" },
              ]}
            >
              <Steps>
                <StepBlock n={1}>
                  Localize o campo '<strong style={{ color: C.t1 }}>Conteúdo</strong>' — é onde o texto completo do artigo vai
                </StepBlock>
                <StepBlock n={2}>
                  <p>Use as opções de formatação do editor para estruturar o conteúdo</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: ".75rem" }}>
                    {fmtKeys.map(({ key, label }) => (
                      <div key={key} style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: C.s1, border: `1px solid ${C.b1}`,
                        borderRadius: 4, padding: "6px 12px", fontSize: 12.5, color: C.t2,
                      }}>
                        <span style={{
                          fontFamily: C.mono, fontSize: 12, background: C.s3,
                          border: `1px solid ${C.b2}`, color: C.t1,
                          padding: "1px 6px", borderRadius: 3,
                        }}>{key}</span>
                        {label}
                      </div>
                    ))}
                  </div>
                </StepBlock>
                <StepBlock n={3}>
                  Use o estilo <Pill>Normal</Pill> para parágrafos comuns
                </StepBlock>
              </Steps>
              <Tip>
                <strong style={{ color: C.t2 }}>Dica:</strong> Escreva o texto primeiro no Word ou Google Docs, depois cole aqui. A formatação básica é mantida.
              </Tip>
            </Section>

            {/* 04 — Publicando */}
            <Section
              id="s4"
              n="04"
              title="Publicando o artigo"
              onHoverImage={setHoveredImage}
              images={[
                { src: "/sanity/step-4/4.webp", label: "Publicar artigo no Studio" },
              ]}
            >
              <Steps>
                <StepBlock n={1}>
                  Revise os campos — especialmente <Pill>Title</Pill>, <Pill>Slug</Pill> e <Pill>Date</Pill>
                </StepBlock>
                <StepBlock n={2}>
                  Clique no botão '<strong style={{ color: C.t1 }}>Publish</strong>' no canto inferior direito
                  <StepSub>O artigo aparece no site imediatamente — pode levar até 1 minuto para atualizar</StepSub>
                </StepBlock>
              </Steps>
              <Tip>
                <strong style={{ color: C.t2 }}>Rascunho:</strong> Para salvar sem publicar, basta fechar a janela — o Sanity salva automaticamente. O artigo só vai ao ar quando você clicar em <strong style={{ color: C.t2 }}>Publish</strong>.
              </Tip>
            </Section>

            {/* 05 — Editando artigos */}
            <Section
              id="s5"
              n="05"
              title="Editando artigos já publicados"
              onHoverImage={setHoveredImage}
              images={[
                { src: "/sanity/step-5/5.1.webp", label: "Acessar rascunho (Draft)" },
                { src: "/sanity/step-5/5.2.webp", label: "Opções extras do post" },
              ]}
            >
              <Steps>
                <StepBlock n={1}>
                  No menu lateral, clique em <Pill>Post</Pill> e selecione o artigo que deseja editar
                </StepBlock>
                <StepBlock n={2}>
                  Clique no botão '<strong style={{ color: C.t1 }}>Draft</strong>' na parte superior para acessar o rascunho editável.
                </StepBlock>
                <StepBlock n={3}>
                  Depois de fazer alguma alteração o botão '<strong style={{ color: C.t1 }}>Publish</strong>' vai ativar, clique para salvar as mudanças no site.
                </StepBlock>
                <StepBlock n={4}>
                  Use os três pontinhos <Pill>···</Pill> para deletar ou duplicar. E o botão '<strong style={{ color: C.t1 }}>Unpublish</strong>' para tirar o artigo do site
                  <StepSub>O artigo sai do site imediatamente</StepSub>
                </StepBlock>
              </Steps>
              <Tip warning>
                <strong style={{ color: "#b87a2a" }}>Atenção com o Slug:</strong> alterar esse campo muda o link do artigo no blog.
              </Tip>
            </Section>

            {/* 06 — Dúvidas frequentes */}
            <section
              id="s6"
              data-reveal="true"
              style={{
                borderTop: `1px solid ${C.b1}`, padding: "3rem 0",
                opacity: 0, transform: "translateY(14px)",
                transition: "opacity .45s ease, transform .45s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: "2rem" }}>
                <span style={{ fontFamily: C.mono, fontSize: 12, color: C.t3, letterSpacing: ".1em" }}>06</span>
                <h2 style={{ fontSize: 20, fontWeight: 500, color: C.t1, letterSpacing: "-.01em" }}>Dúvidas frequentes</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {faqItems.map(({ q, a }, i) => (
                  <div key={i} style={{ padding: "16px 0", borderBottom: i < faqItems.length - 1 ? `1px solid ${C.b1}` : undefined }}>
                    <p style={{ fontSize: 13.5, fontWeight: 500, color: C.t1, marginBottom: 5 }}>{q}</p>
                    <p style={{ fontSize: 13, fontWeight: 300, color: C.t2, lineHeight: 1.6 }}>{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contato */}
            <div
              data-reveal="true"
              style={{
                padding: "3rem 0 5rem 0", borderTop: `1px solid ${C.b1}`,
                opacity: 0, transform: "translateY(14px)",
                transition: "opacity .45s ease, transform .45s ease",
              }}
            >
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                border: `1px solid ${C.b1}`, borderRadius: 8, padding: "1.75rem 2rem",
                gap: "2rem", flexWrap: "wrap", background: C.s1,
              }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: C.t1, marginBottom: 4 }}>Ficou com alguma dúvida?</p>
                  <p style={{ fontSize: 13, fontWeight: 300, color: C.t2 }}>Entre em contato diretamente pelo WhatsApp ou telefone.</p>
                </div>
                <a
                  href="tel:+5555999053835"
                  style={{
                    fontFamily: C.mono, fontSize: 16, fontWeight: 500, color: C.t1,
                    letterSpacing: ".04em", textDecoration: "none",
                    border: `1px solid ${C.b2}`, padding: "10px 20px", borderRadius: 5,
                    whiteSpace: "nowrap", transition: "border-color .2s, background .2s",
                  }}
                >
                  +55 55 99905 3835
                </a>
              </div>
            </div>

          </main>
        </div>

      {hoveredImage && (
        <div
          className="tut-overlay"
          onClick={() => setHoveredImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "zoomIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) both",
          }}
        >
          <div style={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}>
            <img
              src={hoveredImage.src}
              alt={hoveredImage.label}
              style={{
                maxWidth: "100%",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: 8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                border: `1px solid ${C.b2}`,
              }}
            />
            <p style={{
              fontFamily: C.mono,
              fontSize: 12,
              color: C.t1,
              background: C.s1,
              border: `1px solid ${C.b2}`,
              padding: "6px 12px",
              borderRadius: 4,
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}>
              {hoveredImage.label}
            </p>
          </div>
        </div>
      )}

      <style>{`
        .tut-overlay {
          pointer-events: none;
        }
        .tut-desktop-hint {
          display: inline;
        }
        .tut-mobile-hint {
          display: none;
        }
        .tut-arrow {
          transition: transform 0.2s ease;
        }
        @keyframes tutFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (hover: none) {
          .tut-overlay {
            pointer-events: auto;
            cursor: pointer;
          }
        }
        @media (max-width: 800px) {
          .tut-images-container {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .tut-arrow {
            transform: rotate(90deg) !important;
            align-self: center !important;
            margin: 8px 0 !important;
          }
          .tut-layout { grid-template-columns: 1fr !important; }
          .tut-sidebar { position: static !important; border-right: none !important; border-bottom: 1px solid ${C.b1}; }
          .tut-hero, .tut-section { padding: 2.5rem 1.5rem !important; }
          .tut-sec-body { grid-template-columns: 1fr !important; }
          .tut-desktop-hint { display: none !important; }
          .tut-mobile-hint { display: inline !important; }
        }
      `}</style>
    </div>
  );
}

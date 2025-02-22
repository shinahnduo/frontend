export default {
  editor: {
    new: {
      title: '새 프로젝트',
      description1: '',
      description2: 'betterwrite.io ',
      description3: '는 사용자가 필요에 따라 디자인 스타일을 제공하여 적응할 수 있도록 합니다.',
      blank: {
        title: '빈 문서',
        description: '기본 편집기입니다. 특정 리소스가 필요하지 않은 간단한 프로젝트에 권장됩니다.',
        button: '생성',
      },
      creative: {
        title: '창의적',
        description: '프로젝트를 챕터, 노트 및 초안으로 나눕니다. 책 쓰기에 권장됩니다.',
        button: '생성',
      },
      annotations: {
        title: '주석',
        description: '노트 기능만 사용합니다. 일상적인 작업에 권장됩니다.',
        button: '생성',
      },
    },
    material: {
      fileController: {
        import: '가져오기',
        export: '내보내기',
      },
    },
    blocked: {
      title: 'Better Write.',
      introduction: {
        name: '소개',
        description1: '',
      },
      commands: {
        description1: '명령은 사용자가 프로젝트를 사용자 정의할 수 있는 유연한 항목입니다. 입력 가능한 항목(텍스트, 제목, 목록, 체크박스)부터 고정된 항목(이미지, 그림, 줄/페이지 나누기)까지 다양합니다.',
        description2: '유연한 항목을 마우스 오른쪽 버튼으로 클릭하거나 누르면 항목 옵션 메뉴가 열립니다.',
        description3: '사용 가능한 명령과 단축키를 아래에서 확인하세요.',
        menu: {
          delete: '삭제 - 선택한 항목을 삭제합니다.',
          up: '위로 - 현재 항목의 위치를 위쪽 항목과 교환합니다.',
          down: '아래로 - 현재 항목의 위치를 아래쪽 항목과 교환합니다.',
          comments: '주석 - 텍스트에서만 사용 가능하며, 나중에 참조할 수 있는 간단한 정보를 작성합니다.',
          swap: '교환 - 현재 항목을 다른 항목으로 교체합니다.',
          add: '추가 - 현재 항목 아래에 새 항목을 삽입합니다.',
          text: '텍스트 - 텍스트에서만 사용 가능하며, 파일 생성 시 덮어쓸 새로운 스타일로 텍스트를 사용자 정의합니다.',
          image: '이미지 - 이미지에서만 사용 가능하며, 기본 이미지 설정을 변경합니다.',
        },
        name: '명령',
      },
    },
    header: {
      project: '프로젝트',
      export: '내보내기',
      chapters: '챕터',
      tools: '도구',
      vault: '보관함',
      help: '도움말',
      login: {
        logout: '로그아웃',
        delete: '삭제',
      },
    },
    cloud: {
      limitProjectSize: "최대 클라우드 프로젝트 용량({limit}MB)을 초과했습니다! 로컬(.bw) 또는 지원되는 제공자(Dropbox)에 저장하여 프로젝트를 잃지 않도록 하세요!",
    },
    auth: {
      login: {
        show: '로그인',
        title: 'Better Write',
        error: '계정 인증 중 예기치 않은 오류가 발생했습니다 :(',
        placeholder: '이메일을 입력하세요.',
        success: '성공적으로 로그인했습니다!',
        google: 'Google 계정으로 로그인',
        github: 'Github 계정으로 로그인',
      },
      logout: {
        error: '로그아웃 중 예기치 않은 오류가 발생했습니다 :(',
      },
      delete: {
        error: '데이터 삭제 중 예기치 않은 오류가 발생했습니다 :(',
      },
    },
    project: {
      control: {
        title: '챕터 {suffix}',
      },
      configuration: {
        title: '문서',
        creator: '저자',
        name: '이름',
        subject: '주제',
        producer: '제작자',
        keywords: '키워드',
        tooltip: {
          base: '이 필드는 문서를 내보내고 필요할 때 콘텐츠를 생성하기 위해 애플리케이션에서 사용됩니다. 간단히 말해, 필드를 올바르게 작성하세요.',
          creator: '문서를 작성/작성한 책임이 있는 이름/조직',
          name: '문서의 이름',
          subject: '문서의 주제',
          producer: '문서의 제작자/출판사',
          keywords: '문서의 키워드',
        },
      },
    },
    preferences: {
      header: {
        title: '환경설정',
        close: '일부 변경 사항은 애플리케이션을 다시 로드해야만 적용됩니다. 애플리케이션을 다시 로드하시겠습니까?',
      },
      project: {
        title: '프로젝트',
      },
      configuration: {
        title: '구성',
        theme: {
          title: '테마',
          define: '사전 정의됨',
          or: '또는',
        },
        clientStorage: {
          title: '클라이언트 저장소',
          description: '로컬 저장소 클라이언트를 선택하세요. IndexedDB를 사용하는 것이 권장되며, 이는 로컬 저장소보다 훨씬 큰 프로젝트 용량을 허용합니다.',
          indexeddb: 'IndexedDB',
          local: '로컬 저장소',
        },
        editor: {
          options: {
            googleFonts: {
              title: 'Google API 폰트',
              description: '편집기에서 외부 폰트 사용을 활성화합니다. 인터넷 연결에 따라 다릅니다. 파일 생성기 요청에는 영향을 미치지 않습니다.',
            },
            compressFiles: {
              title: '이미지 압축',
              description: '값이 낮을수록 이미지 품질이 낮아집니다(기본값은 1.0). 프로젝트(.bw) 크기를 줄이는 것이 권장됩니다.',
            },
            purgeEntities: {
              title: '엔티티 정리',
              description: '파일을 저장할 때마다 각 편집기 항목에서 불필요한 항목을 제거하여 프로젝트를 가볍게 만들기 위해 정리가 수행됩니다. 활성화되면 저장 속도가 느려집니다.',
            },
            trackEntities: {
              title: '엔티티 추적',
              description: '각 엔티티의 생성 및 변경이 기록되어 생성 시간, 변경 사항 등을 조회할 수 있습니다. 프로젝트 크기가 약간 증가합니다.',
            },
          },
          background: {
            title: '배경',
            cover: '커버',
            image: '이미지',
            imageBlur: '블러',
            imageGrayscale: '그레이스케일',
            imageSaturate: '채도',
            imageSepia: '세피아',
          },
          title: '편집기',
          heading: '제목 텍스트',
          header: '상단 바',
          graph: '사이드바',
          text: '편집기 텍스트',
          fontFamily: '글꼴',
          fontWeight: '글꼴 두께',
          fontSize: '글꼴 크기',
        },
      },
      styles: {
        title: '스타일',
      },
      keyboard: {
        title: '키보드',
      },
      commands: {
        '1': '단락',
        '2': '제목 2',
        '3': '제목 3',
        '4': '줄 바꿈',
        '5': '페이지 나누기',
        '6': '체크박스',
        '7': '목록',
        '8': '이미지',
        '9': '그림',
      },
      shortcuts: {
        title: '단축키',
        editor: {
          italic: '이탤릭 추가',
          bold: '굵게 추가',
          underline: '밑줄 추가',
          delete: '삭제',
          undo: '텍스트 실행 취소',
          undoEvent: '작업 실행 취소',
          swap: '위치 변경',
          to: '다음 위치로 이동',
          dragtitle: '위치 드래그',
          dragshort: 'Alt + 마우스 왼쪽',
        },
        inserts: {
          title: '삽입 단축키',
          description: '현재 커서 위치에서 입력할 값을 설정합니다.',
          key: '단축키',
          value: '값',
        },
      },
    },
    entity: {
      paragraph: '단락',
      'heading-one': '제목 1',
      'heading-two': '제목 2',
      'heading-three': '제목 3',
      'page-break': '페이지 나누기',
      'line-break': '줄 바꿈',
      image: '이미지',
      generator: {
        template: '기본',
      },
    },
    bar: {
      supabase: {
        load: '클라우드 로드',
        save: '클라우드 저장',
      },
      pdf: {
        preview: '미리보기 (.PDF)',
        generate: '생성 (.PDF)',
        configuration: '구성 (.PDF)',
      },
      epub: {
        generate: '생성 (.EPUB)',
        table: '목차',
      },
      txt: {
        generate: '생성 (.TXT)',
      },
      html: {
        generate: '생성 (.HTML)',
      },
      docx: {
        configuration: '구성 (.DOCX)',
        generate: '생성 (.DOCX)',
      },
      project: {
        new: '새 프로젝트',
        blank: '새로운 간단한 프로젝트',
        configuration: '구성',
        load: '로드',
        save: '저장',
        preferences: '환경설정',
        statistics: '통계',
        corrector: '교정기',
        autosave: '로컬 자동 저장',
        cloudAutosave: '클라우드 자동 저장',
        language: '언어',
        theme: '테마',
        import: '가져오기',
        export: '내보내기',
        exportAs: '다른 형식으로 내보내기...',
      },
      chapter: {
        drafts: '초안',
        new: '새로 만들기',
        delete: '삭제',
        up: '위로',
        down: '아래로',
      },
      dropbox: {
        title: 'Dropbox',
        connect: '연결',
        save: 'Dropbox에 저장',
        load: '로드',
      },
      drive: {
        save: 'Google Drive 저장',
        load: 'Google Drive 로드',
      },
      assistants: {
        speechRecognition: '음성 입력',
        actions: '작업',
        finder: '텍스트 검색',
        swapper: '텍스트 교환기',
      },
      help: {
        doubts: '질문',
        support: '지원',
        terms: '이용 약관',
        privacy: '개인정보 보호정책',
      },
      generator: {
        substitutions: '대체',
      },
    },
    window: {
      confirmConfiguration: '설정을 저장하지 않고 종료하시겠습니까?',
      saveDropbox: '이 파일을 Dropbox에 저장하시겠습니까?',
      saveLocal: '이 파일을 저장하시겠습니까?',
      deleteChapterPage: '현재 챕터를 삭제하시겠습니까?',
    },
    text: {
      placeholder: {
        base: '옵션 메뉴를 표시하려면 누르거나 마우스 오른쪽 버튼을 클릭하세요.',
        paragraph: '단락',
        headingone: 'H1',
        headingtwo: 'H2',
        headingthree: 'H3',
        shortcuts: {
          switcherEntry: '입력',
          switcherOutput: '출력',
          finderEntry: '입력',
        },
      },
    },
    pdf: {
      gen: {
        chapters: '챕터',
        color: '색상 스키마',
        dpi: 'DPI',
      },
      note: {
        title: '고려사항',
        description: '텍스트',
        bw: '문서 제작자',
      },
      externals: {
        generate: {
          title: '생성',
          button: '생성',
        },
        preview: {
          title: '시뮬레이션',
          button: '생성',
          warning: '* 시뮬레이션 모드는 Better Write 구현 기능의 모든 기능을 지원하지 않습니다. 렌더링되지 않으면 생성 또는 PDF를 선택하세요.',
        },
      },
      inserts: {
        nowOnline: '인터넷 연결이 감지되었지만 폰트가 로드되지 않았습니다. 페이지를 새로 고치세요.',
      },
      theme: {
        title: '테마 사용',
        tooltip: '이 기능은 현재 디자인 테마를 사용하고 색상을 적용하는 다른 PDF 옵션을 무시합니다.',
      },
      project: {
        title: '문서',
        encryption: {
          title: '암호화',
          user: '사용자 비밀번호',
          owner: '소유자 비밀번호',
        },
        permissions: {
          title: '권한',
          printing: '인쇄',
          modifying: '수정',
          copying: '복사',
          annotating: '주석',
          fillingForms: '구독 / 작성',
          contentAccessibility: '콘텐츠 접근성',
          documentAssembly: '조립',
        },
        tooltip: {
          title: '다음 옵션은 사용자의 PDF 접근에 영향을 미칩니다. 기본 설정을 변경해야 할 필요가 있는 경우에만 간섭하세요.',
          permissions: {
            printing: '인쇄',
            modifying: '수정',
            copying: '복사',
            annotating: '주석',
            fillingForms: '구독 / 작성',
            contentAccessibility: '콘텐츠 접근성',
            documentAssembly: '조립',
          },
        },
      },
      cover: {
        tooltip: '현재로서는 이미지가 삽입된 커버는 페이지에 정의된 상단 여백에 문제가 있습니다. 이미지 기능이 있는 커버를 사용하려면 상단 여백을 0으로 설정하는 것이 좋습니다.',
        type: '활성화',
        image: '이미지 사용',
      },
      base: {
        backgroundColor: {
          title: '배경색',
          tooltip: '"테마 사용" 옵션이 비활성화된 경우에만 배경색이 적용됩니다.',
        },
        tooltip: '페이지 기능은 Better Write의 v1.x 버전까지 크게 변경될 수 있습니다.',
        title: '페이지',
        pageSize: '크기',
        pageOrientation: '방향',
        pageMargins: {
          title: '여백',
          left: '왼쪽',
          top: '상단',
          right: '오른쪽',
          bottom: '하단',
        },
        footer: {
          title: '바닥글',
          exists: '활성화',
          start: '시작',
          alignment: '정렬',
          size: '크기',
          type: '스타일',
          fontFamily: '글꼴',
        },
        header: {
          title: '머리글',
          content: '내용',
          exists: '활성화',
          start: '시작',
          alignment: '정렬',
          size: '크기',
          type: '스타일',
          fontFamily: '글꼴',
        },
        summary: {
          title: '요약',
          type: '스타일',
          fontSize: '글꼴 크기',
          fontFamily: '글꼴',
        },
      },
      lineBreak: {
        spacing: '간격',
        active: '이미지 사용',
        size: '크기',
      },
      custom: {
        image: {
          height: '높이',
          width: '너비',
          alignment: '정렬',
        },
        title: {
          cover: '커버',
          paragraph: '단락',
          headingOne: '제목 1',
          headingTwo: '제목 2',
          headingThree: '제목 3',
        },
        generics: {
          font: '글꼴',
          fontSize: '글꼴 크기',
          lineHeight: '줄 높이',
          indent: '들여쓰기',
          bold: '굵게',
          italics: '이탤릭',
          alignment: '정렬',
          characterSpacing: '문자 간격',
          color: '텍스트 색상',
          background: '텍스트 배경',
          markerColor: '마커 색상',
          decoration: '장식',
          decorationStyle: '장식 스타일',
          decorationColor: '장식 색상',
          breakPage: '페이지 나누기',
          lineBreak: '줄 바꿈',
        },
        save: '저장',
      },
      configuration: {
        header: {
          content: '여기에 내용',
        },
        footer: {
          style: {
            simple: '단순',
            counter: '카운터',
          },
        },
        summary: {
          style: {
            default: '기본',
          },
        },
        alignment: {
          default: '기본',
          justify: '양쪽 정렬',
          left: '왼쪽',
          center: '중앙',
          right: '오른쪽',
        },
        orientation: {
          portrait: '세로',
          landscape: '가로',
        },
      },
    },
    aside: {
      resume: '요약',
      dropbox: {
        connect: '연결',
        save: '저장',
        load: '로드',
      },
      drive: {
        save: 'Google Drive 저장',
        load: 'Google Drive 로드',
      },
      graph: {
        title: '목록 표시',
        chapters: '챕터',
        actuallyPage: '현재 페이지',
        projectPages: '프로젝트 페이지',
        timeline: '타임라인',
        schemas: '작업 공간',
      },
      configuration: {
        title: '설정',
        dark: '다크 모드',
        lang: '언어',
        draggable: '드래그 가능',
        bars: '사이드바',
        transition: '전환',
        autosave: '자동 저장',
        cloudAutosave: '클라우드 자동 저장',
        blocked: '초기 튜토리얼',
        bottomBar: '하단 바',
        topBar: '상단 바',
        language: '언어',
        advanced: '고급',
        entity: {
          title: '편집기',
          insertEntityInParagraphBreakLine: '줄 바꿈 시 단락 삽입',
        },
      },
      entity: {
        delete: '삭제',
        up: '위로',
        down: '아래로',
        switch: '변경',
        add: '추가',
        image: '이미지',
        comments: '주석',
        paragraph: '단락',
        customize: '텍스트',
        optionsOn: '활성화',
      },
      project: {
        title: '프로젝트',
        addons: {
          textSwitcher: {
            title: '텍스트 교체',
          },
          textFinder: {
            title: '텍스트 찾기',
          },
        },
        save: {
          title: '간단 저장',
        },
        load: {
          title: '간단 로드',
        },
        blocked: '프로젝트를 생성하거나 로드하세요.',
        page: {
          new: {
            title: '새 챕터',
          },
          delete: {
            title: '챕터 삭제',
          },
        },
        new: {
          title: '새 프로젝트',
          name: '이름',
          creator: '제작자',
          version: '버전',
          subject: '주제',
          confirm: '생성',
          type: '스타일',
          create: '생성',
          types: {
            blank: {
              title: '빈 문서',
              description: '추가 기능 없이 프로젝트를 생성합니다. 간단한 노트와 프로젝트에 권장됩니다.',
            },
            creative: {
              title: '창의적',
              description: '책을 작성하는 데 필요한 모든 구조를 갖춘 프로젝트를 생성합니다.',
            },
            annotations: {
              title: '주석',
              description: '주석 기능만 있는 프로젝트를 생성합니다. 일상적인 작업에 권장됩니다.',
            },
          },
          content: {
            name: '새 프로젝트',
            nameNew: '제목 없음',
            creator: 'Lorem Ipsum',
            subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum molestie metus. Etiam in metus arcu. Ut at augue neque. Donec ac felis vel arcu gravida volutpat.',
            version: '0.1.0',
          },
        },
      },
      pdf: {
        title: '생성',
        preview: '미리보기',
        configuration: '구성',
      },
      commands: {
        title: '명령',
        prefix: '접두사',
        contents: [
          {
            title: '단락',
            tag: 'P',
            content: '간단한 단락을 삽입합니다. 기본적으로 모든 블록은 단락으로 시작합니다.',
          },
          {
            title: '제목 1',
            tag: 'H2',
            content: '보조 제목.',
          },
          {
            title: '제목 2',
            tag: 'H3',
            content: '3차 제목.',
          },
          {
            title: '제목 3',
            tag: 'BP',
            content: '페이지 나누기. 생성기는 자동으로 페이지를 나눕니다.',
          },
          {
            title: '줄 바꿈',
            tag: 'LB',
            content: '줄 바꿈. 생성기는 자동으로 줄을 감쌉니다.',
          },
          {
            title: '이미지',
            tag: 'IM',
            content: '이미지. 기기에서 이미지를 편집기에 추가합니다.',
          },
          {
            title: '대화',
            tag: 'D',
            content: '대화. 편집기는 정의된 대화 목표를 삽입합니다. 이 기능에 대한 사용 가능한 옵션은 환경설정을 참조하세요.',
          },
          {
            title: '체크박스',
            tag: 'CH',
            content: '선택 상자. 생성기는 자동으로 체크박스 옵션을 렌더링합니다.',
          },
          {
            title: '목록',
            tag: 'LI',
            content: '목록. 생성기는 자동으로 후속 목록을 계산합니다.',
          },
          {
            title: '그림',
            tag: 'T',
            content: '그림에서 아이디어를 만듭니다. 생성기는 그림을 이미지로 변환합니다.',
          },
        ],
      },
    },
    pwa: {
      prompt: {
        offlineReady: '앱이 오프라인에서 작동할 준비가 되었습니다',
        newContent: '새로운 콘텐츠가 있습니다. 업데이트하려면 새로 고침 버튼을 클릭하세요.',
        reload: '새로 고침',
        close: '닫기',
      },
    },
    drafts: {
      active: '활성',
      others: '기타',
      chapters: '챕터',
      statistics: {
        characters: '문자',
        sentences: '문장',
        letters: '글자',
        paragraph: '단락',
        heading: '제목',
        fixed: '고정 항목',
        longest: '가장 긴 콘텐츠',
      },
    },
    addons: {
      substitutions: {
        description: '단어와 구문을 하나씩 변경하지 않고 전체를 대체합니다. 기본 항목을 편집하거나 제거하는 것은 권장되지 않습니다. 처음에는 단어로 대체하고, 그 다음에 굵게/이탤릭으로 입력하세요.',
        from: '대체',
        to: '대상',
        italic: '이탤릭',
        bold: '굵게',
      },
      corrector: {
        convert: '변환',
        removeStartWhitespace: {
          title: '시작 부분의 공백 제거',
          description: '단락의 시작 부분에 있는 모든 공백이 제거됩니다.',
        },
        removeEndWhitespace: {
          title: '끝 부분의 공백 제거',
          description: '단락의 끝 부분에 있는 모든 공백이 제거됩니다.',
        },
        insertParagraphEndStop: {
          title: '끝점 삽입',
          description: '모든 단락에 필요할 경우 마침표가 추가됩니다.',
        },
        removeExtraWhitespace: {
          title: '여러 공백 제거',
          description: '모든 불필요한 공백이 제거됩니다.',
        },
        insertDialogEndStop: {
          title: '대화 끝점 삽입',
          description: '모든 단락에 대화의 두 번째 발생 시 끝에 마침표가 추가됩니다.',
        },
        resetEntityRaw: {
          title: '항목 지우기',
          description: '모든 입력 항목의 내부 콘텐츠를 제거합니다.',
        },
      },
      statistics: {
        global: '전역',
        characters: '문자',
        impact: '예상 독서 시간',
        letters: '글자',
        sentences: '문장',
        words: '단어',
        repeated: '반복된 단어',
        min: '최소 문자',
        paragraph: '단락',
        heading: '제목',
        fixed: '고정 항목',
        longest: '가장 긴 콘텐츠',
      },
    },
    schemas: {
      icon: {
        import: '이미지 가져오기',
        or: '또는...',
      },
      types: {
        default: {
          target: '기본',
          description: '원하는 대로 노트를 작성하세요.',
        },
        characters: {
          target: '캐릭터',
          description: '이야기의 각 캐릭터에 대한 파일을 만들고 각 챕터에서 그들이 참여하는 강조된 단락을 확인하세요.',
        },
      },
      create: {
        title: '작업 공간',
        description: '문서 생성에 참여하지 않는 추가 리소스로, 제작 흐름을 돕고 모든 글쓰기를 동반합니다!',
        name: '이름',
        nameItem: '주석',
        prefix: '접두사',
        prefixDescription: '언제든지 파일을 참조할 수 있는 접두사를 선택하세요.',
        type: '스키마 유형',
        typeDescription: '찾고 있는 것과 더 관련이 있는 스타일을 선택하세요.',
        button: '생성',
        templates: {
          title: '잠시만요...',
          description: '옵션으로, 프로젝트를 잘 시작할 수 있는 추가 템플릿을 선택할 수 있습니다!',
          button: '시작',
          simple: {
            title: '단순',
            description: '일반 주석으로 시작하고 원하는 대로 작업 공간을 구축하세요!',
          },
          enthusiast: {
            title: '열정적인',
            description: '창의력을 최대한 발휘할 수 있도록 여러 파일로 프로젝트를 시작하세요!',
          },
        },
      },
      defines: {
        annotations: '주석',
        lore: '설화',
        characters: '캐릭터',
        timeline: '타임라인',
      },
      items: {
        file: '새 파일',
        folder: '새 폴더',
      },
      theme: {
        placeholder: '명령을 열려면 /를 입력하세요...',
        tags: {
          h1: '주요 제목',
          h2: '보조 제목',
          h3: '3차 제목',
          bulletList: '글머리 기호 목록',
          orderedList: '순서 목록',
          taskList: '작업 목록',
          image: '이미지',
          quote: '인용',
          table: '표',
          code: '코드',
          divider: '구분선',
        },
      },
    },
    characters: {
      title: '캐릭터',
      description: '글을 쓰면서 특정 단어를 제어하세요.',
      item: {
        addCharacter: '캐릭터 추가',
        name: '이름',
        nameCase: '유형',
        nameCaseStrict: '엄격',
        nameCaseDefault: '기본',
        nameCaseAll: '모두',
        color: '색상',
        colorAlpha: '불투명도',
        important: '중요',
        disabled: '비활성화됨',
      },
      data: {
        occurrences: '발생',
        averageOccurrences: '평균 발생',
      },
    },
    vault: {
      empty: '보관함이 비어 있습니다.',
    },
    tutorial: {
      buttons: {
        prev: '이전',
        next: '다음',
      },
      pages: {
        1: {
          title: '창의성.',
          description1: '글쓰기 애호가를 위한 워드 프로세서에 오신 것을 환영합니다.',
          description2: 'betterwrite.io의 다양한 도구를 발견하고 배우기 위한 독점 투어입니다!',
          alert: '튜토리얼을 다시 표시하지 않습니다.',
        },
        2: {
          title: '엔티티 모델',
          description1: '주요 편집기는 각 요소에 대한 개별 상호작용을 허용하도록 설계되었으며, 입력된 각 항목이 동일한 편집기의 다른 요소에 영향을 미치지 않습니다.',
          description2: '이 접근 방식의 큰 장점은 독특하고 완전히 사용자 정의 가능한 기능의 출현입니다.',
          description3: '각 항목(엔티티)과 상호작용하려면 해당 항목을 누르거나 마우스 오른쪽 버튼을 클릭하거나 키보드 단축키 CTRL + (1-9)를 사용하세요.',
        },
        3: {
          title: '사이드 그래프',
          description1: '프로젝트에서 항상 일어나는 모든 것을 실시간으로 시각화하세요.',
          high2: '챕터:',
          high3: '주석: ',
          description2: '원고를 챕터로 나누고 미래에 아무것도 변경할 필요가 없습니다.',
          description3: '프로젝트의 내보내기 흐름에 간섭하지 않고 한 곳에서 노트를 보관하세요.',
        },
        4: {
          title: '상단 바',
          description1: '불필요한 단계 없이 원하는 도구에 쉽게 접근하세요.',
          high2: '파일: ',
          high3: '내보내기: ',
          high4: '도구: ',
          high5: '보관함: ',
          high6: '도움말: ',
          description2: '프로젝트를 조작하는 주요 방법을 확인하세요. 생성, 저장, 변경, 로드 및 쿼리와 같은 방법이 포함됩니다.',
          description3: '파일 생성기와 그 정의. 각 확장은 서로 다른 설정으로 작동합니다.',
          description4: '경험을 더하는 추가 기능.',
          description5: '프로젝트를 쉽게 접근할 수 있는 위치에 저장하세요.',
          description6: '문의할 수 있는 문서.',
        },
        5: {
          title: '도구',
          description1: '프로젝트를 처리하는 새로운 방법을 발견하세요.',
          high2: '초안: ',
          high3: '교정기: ',
          high4: '삽입 단축키: ',
          high5: '캐릭터: ',
          high6: '',
          description2: '여러 버전의 텍스트를 걱정 없이 작성하세요.',
          description3: '모든 항목에서 특정 사례를 처리하세요.',
          description4: '자주 사용하는 단어나 문장을 삽입할 단축키를 만드세요.',
          description5: '텍스트에서 캐릭터가 얼마나 자주 나타나는지 또는 그 맥락에서의 영향을 쉽게 발견하세요.',
          description6: ''
        },
        final: {
          title: '탐험.',
          description1: '이제 원하는 대로 즐기고 원하는 대로 구성하세요.',
        },
      },
    },
    presence: {
      beta: '이 도구는 아직 개발 중이며, 예상치 못한 결과가 발생할 수 있습니다. 방을 생성하거나 참여하기 전에 프로젝트를 저장하세요.',
      off: '이 방은 사용할 수 없습니다!',
      key: {
        code: '코드:',
        link: '접속 링크:',
        qrcode: 'QR 코드:',
      },
      alert: {
        logoutAccount: '계정에서 로그아웃하시겠습니까? 로컬 데이터가 손실됩니다!',
        deleteAccount: '계정과 모든 로컬 및 클라우드 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다!',
      },
      type: {
        owner: '소유자',
        visit: '방문자',
        collaborator: '협력자',
        description: {
          visit: '방문자: 방에 들어오는 모든 사용자는 프로젝트를 볼 수만 있습니다.',
          collaborator: '협력자: 방에 들어오는 모든 사용자는 프로젝트 데이터를 실시간으로 변경할 수 있으며, 프로젝트의 사본을 보관할 수 있습니다.',
        },
      },
      bar: {
        liveshare: '공유 중...',
      },
      create: {
        title: '라이브 공유',
        description: '프로젝트를 실시간으로 다른 사람과 공유하여 함께 경험을 구축하세요!',
        button: '방 생성',
        key: '키',
        or: '또는',
        new: '방 생성:',
        enterInput: '방 참여:',
        enterPlaceholder: 'vCAQe6FD3D...',
      },
      info: {
        enter: '참여',
        create: '생성',
        title: '공유 방',
        leave: '방 나가기',
      },
    },
  },
  generator: {
    flow: {
      title: '흐름',
      tooltip: '문서 생산 라인을 제어하세요.',
      item: {
        annotation: '주석',
        content: '콘텐츠',
        'break-page': '페이지 나누기',
        bw: '워터마크',
        tooltip: {
          annotation: '추가 텍스트',
          content: '책/빠른 노트의 원본 콘텐츠입니다. 제거할 수 없습니다.',
          'break-page': '페이지 나누기',
          bw: '제거할 수 없습니다.',
        },
      },
    },
    block: {
      paragraph: '단락',
      headingOne: '제목 1',
      headingTwo: '제목 2',
      headingThree: '제목 3',
      fontSize: '글꼴 크기',
      fontColor: '글꼴 색상',
      bold: '굵게',
      italics: '이탤릭',
      alignment: {
        title: '정렬',
        both: '양쪽 정렬',
        left: '왼쪽',
        center: '중앙',
        right: '오른쪽',
      },
      indent: '들여쓰기',
      margin: {
        title: '여백',
        top: '상단',
        bottom: '하단',
      },
    },
    generics: {
      settings: '설정',
    },
  },
  toast: {
    generics: {
      load: '잠시만 기다려 주세요...',
      error: '예기치 않은 오류가 발생했습니다 :(',
      supported: '이 기능은 브라우저에서 지원되지 않습니다 :(',
      cancel: '작업이 취소되었습니다!',
      copy: '성공적으로 복사되었습니다!',
      limit: '제한에 도달했습니다!',
      configurationFail: '가져온 구성이 유효하지 않습니다!',
      invalidName: '이름이 비어 있거나 이미 존재합니다!',
      successAdded: '성공적으로 추가되었습니다!',
      successUpdated: '성공적으로 업데이트되었습니다!',
      successCreated: '성공적으로 생성되었습니다!',
      successSet: '성공적으로 설정되었습니다!',
      successChanged: '성공적으로 변경되었습니다!',
      successRestarted: '성공적으로 재시작되었습니다!',
      successRemoved: '성공적으로 제거되었습니다!',
      loginError: '계정 로그인 중 오류가 발생했습니다!',
      registerError: '새 계정 생성 중 오류가 발생했습니다!',
      onlyOnline: '이 기능에 접근하려면 인터넷 연결이 필요합니다!',
      fileDelete: '파일을 삭제하시겠습니까?',
    },
    storage: {
      limitError: '주의! 앱은 로컬에 저장된 각 프로젝트를 최대 10MB까지 지원합니다. 이 프로젝트를 외부(.bw) 또는 보관함에 저장하는 것이 좋습니다!',
    },
    epub: {
      disabled: '.EPUB 생성기가 일시적으로 비활성화되었습니다 :(',
    },
    pdf: {
      error: 'PDF를 생성할 수 없습니다.',
      configuration: {
        save: '구성이 성공적으로 저장되었습니다!',
      },
      create: 'PDF가 성공적으로 다운로드되었습니다!',
      preview: 'PDF 미리보기가 성공적으로 완료되었습니다!',
      generate: {
        empty: '최소한 하나의 챕터를 선택하세요!',
      },
      previewProblems: '성능 문제를 피하기 위해 미리보기에서 특정 기능이 나타나지 않을 수 있습니다.',
    },
    project: {
      createAlert: '새 프로젝트를 생성하시겠습니까? 클라우드에 저장되지 않은 데이터는 손실됩니다.',
      deleteAlert: '프로젝트를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
      deleteProject: '새 프로젝트를 로드하시겠습니까? 모든 로컬 데이터가 손실됩니다.',
      import: '{name}을(를) 로드하시겠습니까?',
      create: '프로젝트가 성공적으로 생성되었습니다!',
      load: '프로젝트가 성공적으로 로드되었습니다!',
      save: '프로젝트가 성공적으로 저장되었습니다!',
      error: '프로젝트를 로드할 수 없습니다 :(',
      export: '프로젝트가 확장자(.bw)로 성공적으로 내보내졌습니다!',
      delete: '프로젝트가 성공적으로 삭제되었습니다!',
      unsupportedExtension: '이 확장은 Better Write에서 지원되지 않습니다!',
      docx: {
        generate: 'DOCX가 성공적으로 다운로드되었습니다!',
      },
      html: {
        generate: 'HTML이 성공적으로 다운로드되었습니다!',
      },
      txt: {
        generate: 'TXT가 성공적으로 다운로드되었습니다!',
      },
      epub: {
        generate: 'EPUB이 성공적으로 다운로드되었습니다!',
      },
      md: {
        generate: 'Markdown이 성공적으로 다운로드되었습니다!',
      },
      schemas: {
        fileDelete: '파일을 삭제하시겠습니까?',
        folderDelete: '폴더를 삭제하시겠습니까?',
        schemaDelete: '이 섹션을 삭제하시겠습니까?',
      },
    },
    dropbox: {
      load: 'Dropbox와 연결되었습니다!',
      save: 'Dropbox의 Apps > Better Write에 저장되었습니다',
      empty: '유효한 프로젝트를 찾을 수 없습니다 :(',
    },
    entity: {
      paragraph: {
        generator: {
          empty: '스타일을 저장할 이름을 입력하세요!',
          exists: '스타일 이름이 이미 존재합니다!',
        },
      },
      image: {
        errorLoad: 'betterwrite.io에서 해당 이미지를 로드할 수 없습니다.',
      },
    },
    speech: {
      microphone: '시스템에서 마이크를 인식하지 못했습니다!',
    },
    store: {
      contextWarning: '챕터 식별자를 찾을 수 없습니다! 업로드된 파일이 유효한지 확인하세요!',
    },
    material: {
      number: {
        positive: '{number}보다 큰 숫자는 허용되지 않습니다!',
        negative: '{number}보다 작은 숫자는 허용되지 않습니다!',
      },
    },
    corrector: {
      apply: '효과가 성공적으로 적용되었습니다!',
    },
    image: {
      warningLimitFileSize: '{limit}MB 이상의 이미지를 사용하는 것은 권장되지 않습니다!',
      limitFileSize: '최대 파일 크기 제한({limit}MB)을 초과했습니다!',
    },
  },
  landing: {
    loading: '몇 초가 걸릴 수 있습니다...',
    auth: {
      email: '유효한 이메일을 입력하세요!',
      emailPlaceholder: '이메일...',
      password: '비밀번호는 최소 6자 이상이어야 합니다!',
      passwordPlaceholder: '비밀번호...',
      termsError: '이용 약관에 동의하세요!',
      verification: '접속 코드가 이메일로 전송되었습니다!',
      integration: '또는 계정으로 로그인하세요...',
      enter: '로그인',
      register: '등록',
      createAccount: '계정 생성',
      privacy: {
        and: ' 및 ',
        text: '개인정보 보호정책',
      },
      terms: {
        text: '이용 약관에 동의합니다 ',
        link: '이용 약관',
      },
    },
    first: {
      title: '창의적 작가를 위한 편집기.',
      typical: {
        1: '원하는 대로, 원하는 것을 만드세요.',
        2: '모든 도구가 한 곳에',
        3: '모든 도구가 한 곳에.',
        4: '창의력을 최대한 활용하세요.',
      },
      editor: {
        website: '로그인',
        about: '소개',
      },
      support: '프로젝트를 팔로우하세요!',
      paragraphs: [
        '— 열린 공간과 절망 사이에서, 나는 살아남았다.',
        '도로 끝에 있는 소박한 집을 볼 수 있으며, 모든 종류의 이동을 방해합니다.',
        '— 아니! 아니! 아니!',
        '— 오만함에 대해 사과드립니다. 다른 상황에서 만족스럽게 보답할 수 있습니다.',
        '남은 것은 결국 유망한 미래를 깨뜨릴 것입니다.',
        '문제는 해결할 수 없습니다. 논의에 참여한 사람들의 관용은 순전히 개인주의적 증오로 인해 해체되었습니다.',
        '더 잘 쓰거나 더 잘 쓰세요?',
        '창의력은 일상의 오스트라시즘에서의 구원입니다.',
        '— 내 귀에 음악! 승리의 합창!',
        '— 통로가 바로 저기 있습니다! 갑시다!',
        'Kino는 모퉁이에 나타났고, Linea가 패배를 받아들이기에 충분했습니다.',
        '긴장된 분위기. 모든 것에 맞서 달리며, 미덕은 누가 진정으로 옳은 편인지 의심하지 않았습니다.',
      ],
    },
  },
  about: {
    initial: {
      title: '당신의 지평을 넓히세요.',
      description: 'betterwrite.io는 작가와 글쓰기 애호가의 창의력을 최대한 발휘할 수 있도록 설계되었습니다.',
      list: {
        1: '맞춤화: 문서에 간섭하지 않고 편집기를 자신만의 것으로 만드세요.',
        2: '도구: 프로젝트에 직접 기여할 수 있는 다양한 가능성을 탐색하세요.',
        3: '보관함: 프로젝트를 클라우드에 저장하고 쉽게 관리하세요.',
        4: '휴대성: 좋아하는 편집기를 어디든지 가져가세요.',
      },
    },
    entity: {
      title: '모든 것을 절대적으로 제어하세요.',
      description: '제목, 단락, 줄 바꿈, 페이지 나누기, 목록, 체크박스, 이미지 및 그림을 개별적으로 삽입하세요.',
      bw: 'Better Write',
      canvas: '기타',
    },
    powered: {
      title: '지원...',
    },
    portability: {
      title: '원하는 대로, 원하는 것을 만드세요.',
      description: '다른 도구에서 디자인을 변환하고 원하는 대로 변형하세요.',
    },
    finish: {
      title1: '탐험.',
      title2: '발견.',
      title3: '변형.',
    },
  },
  seo: {
    landing: {
      title: 'Better Write',
      description: 'Better Write는 창의적 작가를 위한 워드 프로세서입니다. 원하는 대로, 원하는 것을 만드세요.',
      alt: 'betterwrite.io 애플리케이션 로고',
    },
    editor: {
      title: 'Better Write - 편집기',
      description: 'Better Write는 창의적 작가를 위한 워드 프로세서입니다. 원하는 대로, 원하는 것을 만드세요.',
      alt: 'betterwrite.io 애플리케이션 로고',
    },
    '404': {
      title: 'Better Write - 404 :(',
      description: 'Better Write는 창의적 작가를 위한 워드 프로세서입니다. 원하는 대로, 원하는 것을 만드세요.',
      alt: 'betterwrite.io 애플리케이션 로고',
    },
  },
  plans: {
    title: '프로젝트를 향상시키세요.',
    description: '레벨 업하고 창의력을 발휘하세요.',
    month: '월',
    new: '시작하기',
    beginner: {
      name: '초보자',
      price: '$0',
      description: '여정을 시작하는 데 필요한 모든 것.',
      features: [
        {
          status: 'yes',
          description: '무제한 프로젝트',
        },
        {
          status: 'meh',
          description: '2MB 저장소',
        },
        {
          status: 'yes',
          description: '도구',
        },
        {
          status: 'meh',
          description: '생성기 (PDF / DOCX / TXT)',
        },
        {
          status: 'meh',
          description: 'Dropbox 및 Google Drive',
        },
        {
          status: 'no',
          description: '지원',
        },
      ],
    },
    intermediate: {
      name: '열정적인',
      price: '$5',
      description: '책을 새로운 수준으로 끌어올리세요.',
      features: [
        {
          status: 'yes',
          description: '무제한 프로젝트',
        },
        {
          status: 'meh',
          description: '50MB 저장소',
        },
        {
          status: 'yes',
          description: '도구',
        },
        {
          status: 'yes',
          description: '생성기 (PDF / DOCX / TXT)',
        },
        {
          status: 'yes',
          description: 'Dropbox 및 Google Drive',
        },
        {
          status: 'no',
          description: '지원',
        },
      ],
    },
    advanced: {
      name: '문학가',
      price: '$12',
      description: '책을 새로운 수준으로 끌어올리세요.',
      features: [
        {
          status: 'yes',
          description: '무제한 프로젝트',
        },
        {
          status: 'meh',
          description: '200MB 저장소',
        },
        {
          status: 'yes',
          description: '도구',
        },
        {
          status: 'yes',
          description: '생성기 (PDF / DOCX / TXT)',
        },
        {
          status: 'yes',
          description: 'Dropbox 및 Google Drive',
        },
        {
          status: 'yes',
          description: '지원',
        },
      ],
    },
  },
  questions: {
    default: {
      description: 'betterwrite.io에 대한 일반적인 질문에 대한 여러 답변이 있습니다:',
    },
    navigatorSupport: {
      title: '어떤 브라우저가 지원되나요?',
      description: 'betterwrite.io는 모든 브라우저에서 지원되지 않는 특정 기능에 의존합니다. 아래에서 권장 브라우저를 확인하세요:',
    },
    generatorSupport: {
      title: '왜 생성기는 (.PDF)와 동일한 지원을 받지 않나요?',
      description: 'betterwrite.io는 독점적으로 .pdf를 내보내기 위해 설계되었지만, 개발 과정에서 새로운 기능을 도입했습니다. 결과적으로, 다른 확장은 특정 기능을 지원할 수 없으며, 이는 확장의 제한이나 필요한 적응 부족 때문입니다. 아래에서 각 확장에 대한 지원되는 기능 표를 확인하세요.',
      items: {
        paragraph: '단락',
        customParagraph: '사용자 정의 단락',
        italicAndBold: '이탤릭 및 굵게',
        headings: '제목',
        breakLine: '줄 바꿈',
        breakPage: '페이지 나누기',
        image: '이미지',
        list: '목록',
        checkbox: '체크박스',
        header: '머리글',
        summary: '요약',
        footer: '바닥글',
      },
    },
    generatorRecommendations: {
      title: '문서를 내보내기 위해 어떤 구성을 사용해야 하나요?',
      description: '기본적으로 애플리케이션은 제공하는 모든 확장에서 권장 형식 설정으로 내보냅니다. 예를 들어, PDF 확장은 CYMK / 300dpi로 문서를 내보내며, 이는 인쇄 준비가 된 상태입니다. 기본 옵션을 변경하려면 특정 확장을 조사하는 것이 좋습니다.',
    },
    futureFeatures: {
      title: '미래 기능 및 수정 사항을 어디에서 찾거나 제안할 수 있나요?',
      description: 'betterwrite.io는 오픈 소스 프로젝트로, 제안, 비판 및 버그 보고서를 ',
      clickHere: '여기를 클릭하여 찾을 수 있습니다.',
    },
    releasePlanning: {
      title: '앱이 공식적으로 출시되는 시기는 언제인가요?',
      description: 'betterwrite.io는 2023년 상반기에 버전 1.0을 공식화하는 것을 목표로 하고 있습니다.',
    },
    importProjects: {
      title: '어떤 프로젝트를 여기에서 가져올 수 있나요?',
      description: '애플리케이션은 .bw, .doc, .docx 및 .txt 확장자를 가진 프로젝트 가져오기를 지원합니다. 현재로서는 Google Docs, Microsoft Word, Overleaf 또는 기타 유사한 도구에서 프로젝트를 직접 가져오는 것을 지원할 계획이 없습니다.',
    },
  },
  plugin: {
    logger: {
      console: {
        start: '안녕하세요! 이걸 사용할 줄 안다면, ',
      },
      on: {
        dropbox: {
          save: {
            success: 'DROPBOX에 성공적으로 저장되었습니다!',
            error: 'DROPBOX에 저장할 수 없습니다!',
          },
        },
        entity: {
          inputFirst: '<{arguments}>이(가) <{index}> 위치에 삽입되었습니다.',
          create: '<{data}>이(가) <{index}> 위치에 삽입되었습니다.',
          createEmpty: '새 줄이 <{index}>에 추가되었습니다!',
          edit: '<{index}> 위치가 <{arguments}>로 업데이트되었습니다.',
          delete: '<{index}> 위치가 삭제되었습니다!',
          swap: '<{index}> 위치가 {destination} 위치와 교환되었습니다.',
          break: '<{data}>이(가) <{index}> 위치로 전송되었습니다.',
          alter: '<{index}> 위치의 스타일이 <{data}>로 변경되었습니다.',
          paste: '<{index}> 위치에서 <{quantity}> 항목이 추가되었습니다.',
        },
        project: {
          new: '페이지 번호 <{index}>가 생성되었습니다!',
          delete: '페이지 <{index}>가 삭제되었습니다.',
          swap: '페이지 <{index}>가 {target} 위치와 변경되었습니다.',
          autosave: '프로젝트가 자동으로 성공적으로 저장되었습니다!',
        },
        creative: {
          drafts: {
            set: '페이지 <{name}>이(가) 활성화되었습니다!',
            create: '페이지 <{name}>이(가) 초안으로 추가되었습니다!',
            delete: '페이지 <{name}>이(가) 삭제되었습니다!',
            update: '페이지 <{name}>이(가) 업데이트되었습니다!',
            reset: '페이지 <{name}>이(가) 정리되었습니다!',
          },
        },
      },
      normalize: {
        image: '이미지',
        pageBreak: '페이지 나누기',
        lineBreak: '줄 바꿈',
      },
    },
    sentry: {
      errorWidget: {
        title: '문제가 발생한 것 같습니다.',
        subtitle: '우리 팀이 통보를 받았습니다.',
        subtitle2: '도움을 주시려면 아래에 무슨 일이 있었는지 알려주세요. – 작은 화면 해상도에서는 보이지 않습니다',
        labelName: '이름',
        labelEmail: '이메일',
        labelComments: '무슨 일이 있었나요?',
        labelClose: '닫기',
        labelSubmit: '제출',
        errorGeneric: '보고서를 제출하는 동안 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.',
        errorFormEntry: '일부 필드가 잘못되었습니다. 오류를 수정하고 다시 시도해 주세요.',
        successMessage: '피드백이 전송되었습니다. 감사합니다!',
      },
    },
  },
  generics: {
    input: {
      image: '이미지 삽입',
    },
  },
}